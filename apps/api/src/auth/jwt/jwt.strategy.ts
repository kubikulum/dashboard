import { Injectable } from "@nestjs/common";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { ConfigService } from "@nestjs/config";
import { Auth0User } from "./base/User";
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

  async validate(userPayload: Auth0User): Promise<UserInfo> {
    let user;
    const validatedUser = await this.validateBase(userPayload);

    // If the entity is valid, return it

    if (validatedUser) {
      user = validatedUser;
    } else {

      // Otherwise, make a new entity and return it
      const userFields = userPayload;
      const defaultData = {
        email: userFields.email,
        roles: ["user"],
        username: userFields.email,
        id: userFields.sub,
        firstname: userPayload.given_name,
        lastname: userPayload.family_name,
        createAt: userPayload.created_at
      };

      user = await this.userService.createUser({
        data: defaultData,
      });

      // TODO: Add role member in amplication and uncomment this code
      // if (userPayload.organization_id) {
      //   const organizationRole = userPayload.organizationRoles.find((org) => org.organizationId === userPayload.organization_id);
      //   if (organizationRole) {
      //     roles.push(organizationRole?.roleName);
      //   }
      // }
    }

    const roles = ['admin']
    return { ...user, roles, contextOrganizationId: userPayload.organization_id };
  }
}