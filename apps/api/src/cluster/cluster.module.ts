import { ConsoleLogger, Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClusterModuleBase } from "./base/cluster.module.base";
import { ClusterService } from "./cluster.service";
import { ClusterController } from "./cluster.controller";
import { ClusterResolver } from "./cluster.resolver";
import { Agent } from "https";
import { ApiModule as ClusterApiModule } from "../../lib/generated/cluster.x-k8s.io/v1beta1/dist/api.module";
import { Configuration, ConfigurationParameters } from "../../lib/generated/cluster.x-k8s.io/v1beta1/dist/configuration";
import { HttpModule, HttpService } from "@nestjs/axios";
import axios from "axios";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { OAuthModuleOptions, OAuthService } from "src/oauth-client/oauth.service";
import { OAuthModule } from "src/oauth-client/oauth.module";
@Module({
  imports: [

    ClusterModuleBase,

    ClusterApiModule.forRootAsync({
      imports: [HttpModule.registerAsync({
        useFactory: (config: ConfigService) => {
          const cert_base64 = config.get('MGMT_KUBERNETES_API_CERTFICATE');
          if (!cert_base64) {
            console.log('No cert found for cluster');
          }
          const cert = Buffer.from(cert_base64, 'base64').toString('utf-8');
          console.log(cert);
          return {
            httpsAgent: new Agent({
              // rejectUnauthorized: false,
              ca: cert
            })
          }
        },
        inject: [ConfigService],
      })],

      inject: [OAuthService, ConfigService, HttpService],
      useFactory: (oauthService: OAuthService, config: ConfigService, httpClient: HttpService): Configuration => {
        // Create an adapter for the HttpService to match the expected interface
        const httpClientAdapter = {
          get: (url: string, options?: any) => httpClient.get(url, options).toPromise(),
          post: (url: string, data?: any, options?: any) => httpClient.post(url, data, options).toPromise(),
          put: (url: string, data?: any, options?: any) => httpClient.put(url, data, options).toPromise(),
          delete: (url: string, options?: any) => httpClient.delete(url, options).toPromise(),
          patch: (url: string, data?: any, options?: any) => httpClient.patch(url, data, options).toPromise()
        };

        const params: ConfigurationParameters = {
          basePath: config.get('MGMT_KUBERNETES_API_SERVER_URL'),
          withCredentials: true,
          httpClient: httpClientAdapter as any,
          accessToken: config.get('MGMT_KUBERNETES_API_TOKEN')
        };
        return new Configuration(params);
      },
    }), HttpModule, forwardRef(() => AuthModule)],
  controllers: [ClusterController],
  providers: [ClusterService, ClusterResolver],
  exports: [ClusterService],
})
export class ClusterModule { }
