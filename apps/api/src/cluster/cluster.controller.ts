import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClusterService } from "./cluster.service";
import { ClusterControllerBase } from "./base/cluster.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import * as errors from "../errors";
import { firstValueFrom, of } from 'rxjs';
import { catchError } from "rxjs/operators";
import { AuthJwtToken } from "src/decorators/auth-token.decorator";

import { ForbiddenException } from "../errors";
import { AxiosError } from "axios";
import { Cluster } from "./base/Cluster";
import { ClusterXK8sIoV1beta1Service } from "../../lib/generated/cluster.x-k8s.io/v1beta1/dist";
import { ConfigService } from "@nestjs/config";

@swagger.ApiTags("clusters")
@common.Controller("clusters")
export class ClusterController extends ClusterControllerBase {
  constructor(
    protected readonly service: ClusterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly k8sClusterService: ClusterXK8sIoV1beta1Service,
    protected readonly config: ConfigService
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cluster })
  @nestAccessControl.UseRoles({
    resource: "Cluster",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCluster(@common.Req() req: any) {
    const namespace = this.config.get("MGMT_KUBERNETES_CLUSTER_NAMESPACE");
    const organizationId = req.user.contextOrganizationId;
    const clusterName = `${organizationId}-cluster`
    const clusterCreate = await firstValueFrom(this.k8sClusterService.createClusterXK8sIoV1beta1NamespacedCluster(namespace, {
      kind: "Cluster",
      apiVersion: "cluster.x-k8s.io/v1beta1",
      metadata: {
        name: clusterName,
        labels: {
          organizationId,
          infra: "hetzner",
          cni: "cilium"
        }
      },
      spec: {
        clusterNetwork: {
          pods: {
            cidrBlocks: [
              "10.244.0.0/16"
            ]
          }
        },
        topology: {
          class: "kamaji-hetzner",
          version: "v1.29.4",
          controlPlane: {
            replicas: 2
          },
          workers: {
            machineDeployments: [
              {
                class: "default-worker",
                name: "md-0",
                replicas: 2,
                failureDomain: "fsn1"
              }
            ]
          }
        }
      }
    })).catch((err: AxiosError) => {
      console.log(err);
    });

    return clusterCreate;
  }


}
