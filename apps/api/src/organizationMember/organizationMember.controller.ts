import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import * as nestAccessControl from "nest-access-control";
import { OrganizationMemberService } from "./organizationMember.service";
import { OrganizationMemberControllerBase } from "./base/organizationMember.controller.base";
import { OrganizationMember } from "./base/OrganizationMember";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { OrganizationMemberWhereUniqueInput } from "./base/OrganizationMemberWhereUniqueInput";
import { OrganizationMemberUpdateInput } from "./base/OrganizationMemberUpdateInput";
import { OrganizationMemberUpdateStatusInput } from "./OrganizationMemberUpdateStatusInput";
import { UsersService } from "src/logto-auth-management";
import { firstValueFrom } from "rxjs";

@swagger.ApiTags("organizationMembers")
@common.Controller("organizationMembers")
export class OrganizationMemberController extends OrganizationMemberControllerBase {
  constructor(
    protected readonly authUserService: UsersService,
    protected readonly service: OrganizationMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id/updateStatus")
  @swagger.ApiOkResponse({ type: OrganizationMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrganizationMember",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrganizationMemberStatus(
    @common.Req() request: any,
    @common.Param() params: OrganizationMemberWhereUniqueInput,
    @common.Body() data: OrganizationMemberUpdateStatusInput
  ): Promise<OrganizationMember | null> {
    const organizationMember = await this.service.organizationMember({ where: { id: params.id, organizationId: request.user.contextOrganizationId } });
   
    return this.service.updateOrganizationMember({
      where: { id: params.id },
      data: {
        status: data.status
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        invitation: {
          select: {
            id: true,
          },
        },

        roles: true,
        status: true,
      },
    })




  }
}
