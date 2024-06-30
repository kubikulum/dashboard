import { Injectable } from "@nestjs/common";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { ConfigService } from "@nestjs/config";
import { Auth0User } from "./base/User";
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

  async validate(payload: Auth0User ): Promise<UserInfo> {
    const validatedUser = await this.validateBase(payload);
    // If the entity is valid, return it
    if (validatedUser) {
      return validatedUser;
    }

    // fetch user info 
    const user = await this.authManagementService.getUser(payload.sub);
    // Otherwise, make a new entity and return it
    const defaultData = {
      roles: ["user"],
      username: "admin",
    };

    const newUser = await this.userService.createUser({
      data: defaultData,
    });

    return { ...newUser, roles: newUser?.roles as string[], contextOrganizationId: payload.organization_id };
  }
}
