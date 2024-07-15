import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrganizationMemberModuleBase } from "./base/organizationMember.module.base";
import { OrganizationMemberService } from "./organizationMember.service";
import { OrganizationMemberController } from "./organizationMember.controller";
import { OrganizationMemberResolver } from "./organizationMember.resolver";

@Module({
  imports: [OrganizationMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrganizationMemberController],
  providers: [OrganizationMemberService, OrganizationMemberResolver],
  exports: [OrganizationMemberService],
})
export class OrganizationMemberModule {}
