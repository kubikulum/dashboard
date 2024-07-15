import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClusterModuleBase } from "./base/cluster.module.base";
import { ClusterService } from "./cluster.service";
import { ClusterController } from "./cluster.controller";
import { ClusterResolver } from "./cluster.resolver";

@Module({
  imports: [ClusterModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClusterController],
  providers: [ClusterService, ClusterResolver],
  exports: [ClusterService],
})
export class ClusterModule {}
