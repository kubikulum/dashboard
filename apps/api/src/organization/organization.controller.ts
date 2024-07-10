import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganizationService } from "./organization.service";
import { OrganizationControllerBase } from "./base/organization.controller.base";
import { InvitationCreateInput } from "./inivitationCreateInput";
import { OrganizationWhereUniqueInput } from "./base/OrganizationWhereUniqueInput";
import { errors } from "openid-client";
import { AllowNoOrganization } from "src/auth/organization.guard";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Organization } from "./base/Organization";
import { OrganizationCreateInput } from "./base/OrganizationCreateInput";
import { OrganizationInvitationsService, UsersService } from "src/logto-auth-management";


@swagger.ApiTags("organizations")
@common.Controller("organizations")
export class OrganizationController extends OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly organizationInvitationService: OrganizationInvitationsService,
  ) {
    super(service, rolesBuilder);
  }


  override async createOrganization(@common.Body() data: OrganizationCreateInput): Promise<Organization> {
    return super.createOrganization(data);
  }

  @AllowNoOrganization()
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Organization })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrganizationOverride(@common.Req() req: any, @common.Body() body: OrganizationCreateInput) {
    const org = await this.authManagementService.createOrganization(body.name);
    await this.authManagementService.addUserToOrganization(req.user.id, org.id);
    await this.authManagementService.addRoleToUserInOrganization(req.user.id, org.id, "owner");
    const organization = await this.service.createOrganization({ data: { name: body.name, id: org.id, ownerId: req.user.id, members: { connect: [{ id: req.user.id }] } } });

    // // the project name should have maximum 10 characters
    // const name = org.id.length > 10 ? org.id.substring(0, 10) : org.id;
    // // Create a new project gardener for the organization
    // const createReq = this.gardenerClientService.createCoreGardenerCloudV1beta1Project({
    //   metadata: { name: name, labels: { organization: org.name, organizationId:org.id } },
    //   spec: {
    //     createdBy: {
    //       apiGroup: "rbac.authorization.k8s.io",
    //       kind: "User",
    //       name: `oidc:${req.user.username}`
    //     },
    //     members: [
    //       {
    //         apiGroup: "rbac.authorization.k8s.io",
    //         kind: "User",
    //         name: `oidc:${req.user.username}`,
    //         role: "admin",
    //         roles: ["owner"]
    //       }
          
    //     ],

    //   }
    // })
    // const token = this.config.get("GARDENER_SA_TOKEN");
    // createReq.source = of(token);
    // try {
    //   const { data } = await firstValueFrom(
    //     createReq.pipe(
    //       catchError((error: AxiosError) => {
    //         console.error(error);
    //         throw error
    //       })
    //     )
    //   )
    // } catch (error) {
    //   // if the project creation fails, delete the organization
    //   await this.service.deleteOrganization({ where: { id: org.id } });
    //   await this.authManagementService.deleteOrganization(org.id);
    //   throw new errors.NotFoundException("Failed to create project in gardener");
    // }
    return organization;
  }

  @common.Post("/:id/members")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async sendInvitations(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: InvitationCreateInput[]
  ): Promise<void> {
    //The epoch time in milliseconds when the invitation expires.
    // expire after 24h
    const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    
    await this.organizationInvitationService.createOrganizationInvitation({
      organizationId: params.id,
    inviterId: 'aaa',
    invitee: body[0].email,
    expiresAt: expireTime,
    messagePayload:{
      
    }
      
    })
  }

}
