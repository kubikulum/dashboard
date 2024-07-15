import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganizationMemberService } from "./organizationMember.service";
import { OrganizationMemberControllerBase } from "./base/organizationMember.controller.base";

@swagger.ApiTags("organizationMembers")
@common.Controller("organizationMembers")
export class OrganizationMemberController extends OrganizationMemberControllerBase {
  constructor(
    protected readonly service: OrganizationMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
