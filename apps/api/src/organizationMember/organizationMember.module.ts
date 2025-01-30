import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrganizationMemberModuleBase } from "./base/organizationMember.module.base";
import { OrganizationMemberService } from "./organizationMember.service";
import { OrganizationMemberController } from "./organizationMember.controller";
import { OrganizationMemberResolver } from "./organizationMember.resolver";
import { ConfigService } from "@nestjs/config";
import { LogtoApiManagementModule, Configuration, ConfigurationParameters } from "src/logto-auth-management";
import { OAuthService } from "src/oauth-client/oauth.service";

@Module({
  imports: [OrganizationMemberModuleBase, 
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
  controllers: [OrganizationMemberController],
  providers: [OrganizationMemberService, OrganizationMemberResolver],
  exports: [OrganizationMemberService],
})
export class OrganizationMemberModule {}
