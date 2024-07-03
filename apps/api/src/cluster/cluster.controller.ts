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
  @common.Get()
  @swagger.ApiCreatedResponse({ type: Cluster })
  @nestAccessControl.UseRoles({
    resource: "Cluster",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCluster(@AuthJwtToken() token: string, @common.Req() req: any) {
    // the namespace is the organization id
    const namespace = req.user.contextOrganizationId;
    const org = this.gardenerClientService.listCoreGardenerCloudV1beta1NamespacedShoot(namespace)
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

    if (!data) {

    }

    return data
  }


}
