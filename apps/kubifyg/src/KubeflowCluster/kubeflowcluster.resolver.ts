import * as graphql from "@nestjs/graphql";
import { KubeflowClusterCreateInput } from "../kubeflowCluster/KubeflowClusterCreateInput";
import { KubeflowClusterCreateOutput } from "../kubeflowCluster/KubeflowClusterCreateOutput";
import { KubeflowClusterService } from "./kubeflowcluster.service";

export class KubeflowClusterResolver {
  constructor(protected readonly service: KubeflowClusterService) {}

  @graphql.Mutation(() => KubeflowClusterCreateOutput)
  async CreateKubeflowCluster(
    @graphql.Args()
    args: KubeflowClusterCreateInput
  ): Promise<KubeflowClusterCreateOutput> {
    return this.service.CreateKubeflowCluster(args);
  }
}
