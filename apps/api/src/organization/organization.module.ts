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

@Module({
  imports: [OrganizationModuleBase,
    ApiModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): Configuration => {
        const params: ConfigurationParameters = {
          // set configuration parameters here.
          basePath: config.get('GARDNER_CLUSTER_API_SERVER_URL'),
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
