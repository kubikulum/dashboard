/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { passportJwtSecret } from "jwks-rsa";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Auth0User } from "./User";
import { UserInfo } from "../../UserInfo";
import { UserService } from "src/user/user.service";

export class JwtStrategyBase extends PassportStrategy(Strategy) {
  constructor(
    protected readonly configService: ConfigService,
    protected readonly userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from the Authorization header
      audience: configService.get("AUTH0_AUDIENCE"), // The resource server where the JWT is processed
      issuer: `${configService.get("AUTH0_ISSUER_URL")}`, // The issuing Auth0 server
      algorithms: ["ES384"], // Asymmetric signing algorithm

      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${configService.get(
          "AUTH0_ISSUER_URL"
        )}/jwks`,
      }),
    });
  }

  // Validate the received JWT and construct the user object out of the decoded token.
  async validateBase(userPayload: Auth0User): Promise<UserInfo | null> {

    const user = await this.userService.user({
      where: {
        email: userPayload.email,
      },
    });
    const roles = ['user']
    if (userPayload.organization_id) {
      const organizationRole = userPayload.organizationRoles.find((org) => org.organizationId === userPayload.organization_id);
      if (organizationRole) {
        roles.push(organizationRole?.roleName);
      }
    }
    return user ? { ...user, roles, contextOrganizationId: userPayload.organization_id } : null;
  }
}
