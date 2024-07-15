import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvitationService } from "./invitation.service";
import * as errors from "../errors";
import { InvitationControllerBase } from "./base/invitation.controller.base";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { Invitation } from "./base/Invitation";
import { InvitationFindManyArgs } from "./base/InvitationFindManyArgs";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { InvitationWhereUniqueInput } from "./base/InvitationWhereUniqueInput";
import { OrganizationInvitationsService } from "src/logto-auth-management";
import { firstValueFrom } from "rxjs";
import { OrganizationService } from "src/organization/organization.service";

@swagger.ApiTags("invitations")
@common.Controller("invitations")
export class InvitationController extends InvitationControllerBase {
  constructor(
    protected readonly service: InvitationService,
    protected readonly logtoManagementService: OrganizationInvitationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('pending')
  @swagger.ApiOkResponse({ type: [Invitation] })
  @ApiNestedQuery(InvitationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pending(@common.Req() request: any): Promise<Invitation[]> {
    const result = await this.service.invitations({
      where: { status: { equals: 'PENDING' }, email: { equals: request.user.email } }, select: {

        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        status: true,
        expirationDate: true,
        code: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },

        inviter: {
          select: {
            id: true,
          },
        },
      }
    })
    console.log(result)
    return result
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Post("/:id/resend")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "update",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async resendInvitation(@common.Req() request: any, @common.Param() params: InvitationWhereUniqueInput,): Promise<Invitation> {
    const invitation = await this.service.invitation({ where: { id: params.id } })

    if (!invitation) {
      throw new errors.NotFoundException('Invitation not found')
    }
    if (invitation.status === 'ACCEPTED') {
      throw new errors.ForbiddenException('Invitation already accepted')
    }

    const resultLogto = await firstValueFrom(this.logtoManagementService.createOrganizationInvitationMessage(params.id, { code: invitation.code }))
    const result = await this.service.updateInvitation({
      where: { code: params.id },
      data: { status: 'PENDING' },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        status: true,
        expirationDate: true,
        code: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },

        inviter: {
          select: {
            id: true,
          },
        },
      }
    })

    return result
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Post("/:id/accept")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "update",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async accept(@common.Req() request: any, @common.Param() params: InvitationWhereUniqueInput,): Promise<Invitation> {

    const result = await this.service.updateInvitation({
      where: { code: params.id },
      data: { status: 'ACCEPTED' },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        status: true,
        expirationDate: true,
        code: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },

        inviter: {
          select: {
            id: true,
          },
        },
      }
    })
    try{
    await firstValueFrom(this.logtoManagementService.replaceOrganizationInvitationStatus(result.id, { acceptedUserId: request.user.id, status: 'Accepted' }))
    }catch(e:any){
      console.log(e.request)
      console.log(e.response.data.message)
      throw e
    }
    if (result) {
      await this.service.addUserToOrganization(request.user.id, result.organizationId)
    }


    return result
  }

}
