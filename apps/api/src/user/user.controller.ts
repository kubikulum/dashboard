import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { User } from "@prisma/client";
import {OrganizationRequestInterceptor}  from "../interceptors/organizationRequest.interceptor";

@swagger.ApiTags("users")
@common.Controller("users")
@common.UseInterceptors(OrganizationRequestInterceptor)
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

}
