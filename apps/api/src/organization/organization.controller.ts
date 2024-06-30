import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganizationService } from "./organization.service";
import { OrganizationControllerBase } from "./base/organization.controller.base";
import { Organization } from "./base/Organization";
import { OrganizationCreateInput } from "./base/OrganizationCreateInput";
import { AuthManagementService } from "../auth/auth-management.service";
import { AclValidateRequestInterceptor } from "../interceptors/aclValidateRequest.interceptor";
import * as errors from "../errors";
import { RequireOrganizationGuard, AllowNoOrganization } from "../auth/organization.guard"
@swagger.ApiTags("organizations")
@common.Controller("organizations")
@common.UseGuards(RequireOrganizationGuard)
export class OrganizationController extends OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly authManagementService: AuthManagementService

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
  async createOrganizationOverride(@common.Req() req:any  ,@common.Body() data: OrganizationCreateInput) {
    const org = await this.authManagementService.createOrganization(data.name || "New Organization");
    await this.authManagementService.addUserToOrganization( req.user.id,org.id);
    await this.authManagementService.addRoleToUserInOrganization(req.user.id,org.id,"owner");
    const organization = await this.service.createOrganization({data:{name:data.name,id:org.id,ownerId:req.user.id,members:{connect:[{id:req.user.id}]}}});
    return organization;
  }
}
