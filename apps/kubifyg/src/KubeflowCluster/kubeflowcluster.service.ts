import { Injectable } from "@nestjs/common";
import { KubeflowClusterCreateInput } from "../kubeflowCluster/KubeflowClusterCreateInput";
import { KubeflowClusterCreateOutput } from "../kubeflowCluster/KubeflowClusterCreateOutput";

@Injectable()
export class KubeflowClusterService {
  constructor() {}
  async CreateKubeflowCluster(args: KubeflowClusterCreateInput): Promise<KubeflowClusterCreateOutput> {
    throw new Error("Not implemented");
  }
}
