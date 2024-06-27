import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KubeflowClusterService } from "./kubeflowcluster.service";
import { KubeflowClusterCreateInput } from "../kubeflowCluster/KubeflowClusterCreateInput";
import { KubeflowClusterCreateOutput } from "../kubeflowCluster/KubeflowClusterCreateOutput";

@swagger.ApiTags("kubeflowClusters")
@common.Controller("kubeflowClusters")
export class KubeflowClusterController {
  constructor(protected readonly service: KubeflowClusterService) {}

  @common.Post("/create")
  @swagger.ApiOkResponse({
    type: KubeflowClusterCreateOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateKubeflowCluster(
    @common.Body()
    body: KubeflowClusterCreateInput
  ): Promise<KubeflowClusterCreateOutput> {
        return this.service.CreateKubeflowCluster(body);
      }
}
