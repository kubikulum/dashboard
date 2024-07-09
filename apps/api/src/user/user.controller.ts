import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";

import { OrganizationRequestInterceptor } from "../interceptors/organizationRequest.interceptor";
import * as errors from "../errors";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { UserUpdateInput } from "./base/UserUpdateInput";
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";
import { User } from "./base/User";
import { UsersService } from "src/logto-auth-management";
import { firstValueFrom,catchError } from "rxjs";

@swagger.ApiTags("users")
@common.Controller("users")
@common.UseInterceptors(OrganizationRequestInterceptor)
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly logtoApiManagementService: UsersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  override async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    const user = await super.updateUser(params, data);
    // update in logto
    const toUpdate: any = {};
    if (data.firstName || data.lastName) {
      toUpdate["name"] = `${user?.firstName} ${user?.lastName}`;
    }
    await firstValueFrom(
      this.logtoApiManagementService.updateUser(params.id, {
        name: toUpdate["name"],
        profile: {
          givenName: data.firstName || undefined,
          familyName: data.lastName || undefined
        }
      }).pipe(
				catchError((error) => {
					throw error
				})
			))

    return user;

  }



}
