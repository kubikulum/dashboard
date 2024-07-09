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

@Module({
  imports: [UserModuleBase, LogtoApiManagementModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService): Configuration => {
      const params: ConfigurationParameters = {

        // set configuration parameters here.
        basePath: config.get('LOGTO_MANAGEMENT_API_URL'),
        accessToken: async () => {
          const issuerUrl = config.get('LOGTO_MANAGEMENT_ISSUER_URL')
          const issuer = await openidClient.Issuer.discover(issuerUrl);
          const client = new issuer.Client({
            client_id: config.get('LOGTO_MANAGEMENT_CLIENT_ID') as string,
            client_secret: config.get('LOGTO_MANAGEMENT_CLIENT_SECRET') as string,
          });
          const tokenSet = await client.grant({
            grant_type: 'client_credentials',
            resource: config.get('LOGTO_MANAGEMENT_AUDIENCE') as string,
            scope: 'all',
          });
          if (!tokenSet.access_token) {
            throw new Error('Failed to get access token');
          }
          return tokenSet.access_token;
        }
      };
      return new Configuration(params);
    },
  }), forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule { }
