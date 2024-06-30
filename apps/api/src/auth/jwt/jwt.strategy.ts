import { Injectable } from "@nestjs/common";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { ConfigService } from "@nestjs/config";
import { LogtoUser } from "./base/User";
import { IAuthStrategy } from "../IAuthStrategy";
import { UserInfo } from "../UserInfo";
import { UserService } from "src/user/user.service";
import { UserCreateInput } from "src/user/base/UserCreateInput";
import { AuthManagementService } from "../auth-management.service";

@Injectable()
export class JwtStrategy extends JwtStrategyBase implements IAuthStrategy {
  constructor(
    protected readonly configService: ConfigService,
    protected readonly userService: UserService,
    protected readonly authManagementService: AuthManagementService
  ) {
    super(configService, userService);
  }

  async validate(payload: LogtoUser): Promise<UserInfo> {


    const validatedUser = await this.validateBase(payload);
    // If the entity is valid, return it
    if (validatedUser) {
      return validatedUser;
    }

    // fetch user info 
    const user = await this.authManagementService.getUser(payload.sub);
    // Otherwise, make a new entity and return it
    const defaultData = {
      id: payload.sub,
      username: user.primaryEmail,
      roles: []
    };

    const newUser = await this.userService.createUser({
      data: defaultData,
    });
    const roles = payload.organizationRoles.filter((role) => role.organizationId === payload.organization_id).map((role) => role.roleName);
    //add default user role
    roles.push("user");

    return { ...newUser, roles: roles, contextOrganizationId: payload.organization_id };
  }
}
