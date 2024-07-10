import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClusterService } from "./cluster.service";
import { ClusterControllerBase } from "./base/cluster.controller.base";

@swagger.ApiTags("clusters")
@common.Controller("clusters")
export class ClusterController extends ClusterControllerBase {
  constructor(
    protected readonly service: ClusterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
