import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InvitationModuleBase } from "./base/invitation.module.base";
import { InvitationService } from "./invitation.service";
import { InvitationController } from "./invitation.controller";
import { InvitationResolver } from "./invitation.resolver";
import { ConfigService } from "@nestjs/config";
import { LogtoApiManagementModule, Configuration, ConfigurationParameters } from "src/logto-auth-management";
import { OAuthService } from "src/oauth-client/oauth.service";
import { Organization } from "src/organization/base/Organization";
import { OrganizationService } from "src/organization/organization.service";

@Module({
  imports: [
    InvitationModuleBase,
    LogtoApiManagementModule.forRootAsync({
      imports: [],
      inject: [OAuthService, ConfigService],
      useFactory: (oauthService: OAuthService, config: ConfigService): Configuration => {
        const params: ConfigurationParameters = {
          // set configuration parameters here.
          basePath: config.get('LOGTO_MANAGEMENT_API_URL'),
          accessToken: async () => {
            const token = await oauthService.getAccessToken();
            return token || '';
          }
        };
        return new Configuration(params);
      },
    }),
     forwardRef(() => AuthModule)],
  controllers: [InvitationController],
  providers: [InvitationService, InvitationResolver],
  exports: [InvitationService],
})
export class InvitationModule {}
