import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrganizationMemberResolverBase } from "./base/organizationMember.resolver.base";
import { OrganizationMember } from "./base/OrganizationMember";
import { OrganizationMemberService } from "./organizationMember.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrganizationMember)
export class OrganizationMemberResolver extends OrganizationMemberResolverBase {
  constructor(
    protected readonly service: OrganizationMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
