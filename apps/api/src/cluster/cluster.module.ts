import { Module } from "@nestjs/common";
import { ClusterModuleBase } from "./base/cluster.module.base";
import { ClusterService } from "./cluster.service";
import { ClusterController } from "./cluster.controller";
import { ClusterResolver } from "./cluster.resolver";

@Module({
  imports: [ClusterModuleBase],
  controllers: [ClusterController],
  providers: [ClusterService, ClusterResolver],
  exports: [ClusterService],
})
export class ClusterModule {}
