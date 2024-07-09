import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClusterModuleBase } from "./base/cluster.module.base";
import { ClusterService } from "./cluster.service";
import { ClusterController } from "./cluster.controller";
import { ClusterResolver } from "./cluster.resolver";
import { ApiModule } from "../gardener-client/api.module";
import { Configuration, ConfigurationParameters } from "src/gardener-client/configuration";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule, ConfigService } from "@nestjs/config";
@Module({
  imports: [
    ClusterModuleBase, ApiModule.forRootAsync({
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
     forwardRef(() => AuthModule)],
  controllers: [ClusterController],
  providers: [ClusterService, ClusterResolver],
  exports: [ClusterService],
})
export class ClusterModule { }
