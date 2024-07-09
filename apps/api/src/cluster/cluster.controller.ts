import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClusterService } from "./cluster.service";
import { ClusterControllerBase } from "./base/cluster.controller.base";

@swagger.ApiTags("clusters")
@common.Controller("clusters")
export class ClusterController extends ClusterControllerBase {
  constructor(protected readonly service: ClusterService) {
    super(service);
  }
}
