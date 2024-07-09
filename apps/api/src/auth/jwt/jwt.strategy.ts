import { Injectable } from "@nestjs/common";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { ConfigService } from "@nestjs/config";
import { LogtoUser } from "./base/User";
import { IAuthStrategy } from "../IAuthStrategy";
import { UserInfo } from "../UserInfo";
import { UserService } from "src/user/user.service";

@Injectable()
export class JwtStrategy extends JwtStrategyBase implements IAuthStrategy {
  constructor(
    protected readonly configService: ConfigService,
    protected readonly userService: UserService
  ) {
    super(configService, userService);
  }


  async validate(payload: LogtoUser): Promise<UserInfo> {
    const validatedUser = await this.validateBase(payload);
    console.log("validatedUser", validatedUser);
    // If the entity is valid, return it
    if (validatedUser) {
      return validatedUser;
    }

    // Otherwise, make a new entity and return it
    const userFields = payload.user;
    const defaultData = {

      id: payload.sub,
      username: user.email,
      roles: []

    };

    const newUser = await this.userService.create({
      data: defaultData,
    });
    const roles = payload.organizationRoles.filter((role) => role.organizationId === payload.organization_id).map((role) => role.roleName);
    //add default user role
    roles.push("user");


    return { ...newUser, roles: roles, contextOrganizationId: payload.organization_id };

  }
}
