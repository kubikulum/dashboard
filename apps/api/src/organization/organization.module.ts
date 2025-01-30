import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrganizationModuleBase } from "./base/organization.module.base";
import { OrganizationService } from "./organization.service";
import { OrganizationController } from "./organization.controller";
import { OrganizationResolver } from "./organization.resolver";
import { HttpModule } from "@nestjs/axios";

import { ConfigModule, ConfigService } from "@nestjs/config";
import { LogtoApiManagementModule } from "src/logto-auth-management";
import { OAuthService } from "src/oauth-client/oauth.service";
import { InvitationModule } from "src/invitation/invitation.module";

@Module({
  imports: [OrganizationModuleBase,
    InvitationModule,
    HttpModule, forwardRef(() => AuthModule)],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationResolver],
  exports: [OrganizationService],
})
export class OrganizationModule {}
