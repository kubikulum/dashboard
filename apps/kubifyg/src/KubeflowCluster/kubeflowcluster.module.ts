import { Module } from "@nestjs/common";
import { KubeflowClusterService } from "./kubeflowcluster.service";
import { KubeflowClusterController } from "./kubeflowcluster.controller";
import { KubeflowClusterResolver } from "./kubeflowcluster.resolver";

@Module({
  controllers: [KubeflowClusterController],
  providers: [KubeflowClusterService, KubeflowClusterResolver],
  exports: [KubeflowClusterService],
})
export class KubeflowClusterModule {}
