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
import { CoreGardenerCloudV1beta1Service } from "src/gardener-client/api/coreGardenerCloudV1beta1.service";
import { ForbiddenException } from "../errors";
import { AxiosError } from "axios";
import { Cluster } from "./base/Cluster";

@swagger.ApiTags("clusters")
@common.Controller("clusters")
export class ClusterController extends ClusterControllerBase {
  constructor(
    protected readonly gardenerClientService: CoreGardenerCloudV1beta1Service,
    protected readonly service: ClusterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
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
  async createCluster(@AuthJwtToken() token: string, @common.Req() req: any) {
    // the namespace is the organization id
    const namespace = 'garden-binhk61nl4-b61d9'

    const org = this.gardenerClientService.createCoreGardenerCloudV1beta1NamespacedShoot(namespace, {
      metadata: { name: "test1" },
      spec: {
        cloudProfileName: "local",
        kubernetes: {
          version: "1.27.1",
          kubeAPIServer: {
            defaultNotReadyTolerationSeconds: 300,
            defaultUnreachableTolerationSeconds: 300,
            enableAnonymousAuthentication: false,
            eventTTL: "1h0m0s",
            logging: { verbosity: 2 },
            requests: { maxMutatingInflight: 200, maxNonMutatingInflight: 400 },
          },
          kubeControllerManager: { nodeCIDRMaskSize: 24, nodeMonitorGracePeriod: "40s" },
          kubeProxy: { enabled: true, mode: "IPTables" },
          kubeScheduler: { profile: "balanced" },
          kubelet: {
            failSwapOn: true,
            imageGCHighThresholdPercent: 50,
            imageGCLowThresholdPercent: 40,
            kubeReserved: { cpu: "80m", memory: "1Gi", pid: "20k" },
            serializeImagePulls: true,
          },
          verticalPodAutoscaler: {
            enabled: true,
            evictAfterOOMThreshold: "10m0s",
            evictionRateBurst: 1,
            evictionRateLimit: -1,
            evictionTolerance: 0.5,
            recommendationMarginFraction: 0.15,
            recommenderInterval: "1m0s",
            targetCPUPercentile: 0.9,
            updaterInterval: "1m0s",
          },
        },
        networking: {
          ipFamilies: ["IPv4"],
          nodes: "10.250.0.0/16",
          pods: "10.3.0.0/16",
          services: "10.4.0.0/16",
          type: "calico"
        },
        provider: {
          type: "local",
          workers: [
            {
              cri: { name: "containerd" },
              machine: { architecture: "amd64", image: { name: "local", version: "1.0.0" }, type: "local" },
              maxSurge: 1,
              maxUnavailable: 0,
              maximum: 2,
              minimum: 1,
              name: "worker-yuht7",
              systemComponents: { allow: true },
            },
          ],
          workersSettings: { sshAccess: { enabled: true } },
        },
        purpose: "evaluation",
        region: "local",
        schedulerName: "default-scheduler",
        secretBindingName: "my-local-secret",
        systemComponents: { coreDNS: { autoscaling: { mode: "horizontal" } } },
        // tolerations: [{ key: "seed.gardener.cloud/protected" }],
      },

    })
    org.source = of(token);

    const { data } = await firstValueFrom(
      org.pipe(
        catchError((error: AxiosError) => {
          if (error.response?.status === 403) {
            throw new ForbiddenException(
              "Insufficient privileges to complete the operation"
            );
          }
          throw error
        }),
      ),
    );

    return data
  }


}
