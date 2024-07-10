import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrganizationModuleBase } from "./base/organization.module.base";
import { OrganizationService } from "./organization.service";
import { OrganizationController } from "./organization.controller";
import { OrganizationResolver } from "./organization.resolver";
import { AuthManagementService } from "../auth/auth-management.service";
import { HttpModule } from "@nestjs/axios";
import { ApiModule } from "src/gardener-client/api.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Configuration, ConfigurationParameters } from "src/gardener-client/configuration";
import { LogtoApiManagementModule } from "src/logto-auth-management";
import { OAuthService } from "src/oauth-client/oauth.service";

@Module({
  imports: [OrganizationModuleBase,

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
    HttpModule, forwardRef(() => AuthModule)],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationResolver,AuthManagementService],
  exports: [OrganizationService],
})
export class OrganizationModule {}
