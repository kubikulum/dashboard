import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import * as errors from "../errors";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { UserUpdateInput } from "./base/UserUpdateInput";
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";
import { User } from "./base/User";
import { UsersService } from "src/logto-auth-management";
import { firstValueFrom,catchError } from "rxjs";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../decorators/api-nested-query.decorator";
import { AclFilterResponseInterceptor } from "../interceptors/aclFilterResponse.interceptor";
import { OrganizationFindManyArgs } from "../organization/base/OrganizationFindManyArgs";
import { Organization } from "../organization/base/Organization";



@swagger.ApiTags("users")
@common.Controller("users")

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
    possession: "own",
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/organizations")
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  override async findOrganizations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganizations(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        gardenerProjectNamespace: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }



}
