import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserResolver } from "./user.resolver";
import { Configuration, ConfigurationParameters, LogtoApiManagementModule } from "src/logto-auth-management";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import openidClient from "openid-client";
import { OAuthModule } from "src/oauth-client/oauth.module";
import { OAuthModuleOptions, OAuthService } from "src/oauth-client/oauth.service";

@Module({
  imports: [UserModuleBase,
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
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule { }
