import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrganizationModuleBase } from "./base/organization.module.base";
import { OrganizationService } from "./organization.service";
import { OrganizationController } from "./organization.controller";
import { OrganizationResolver } from "./organization.resolver";
import { AuthManagementService } from "../auth/auth-management.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [OrganizationModuleBase,HttpModule, forwardRef(() => AuthModule)],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationResolver,AuthManagementService],
  exports: [OrganizationService],
})
export class OrganizationModule {}
