import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { OrganizationModule } from "./organization/organization.module";
import { ClusterModule } from "./cluster/cluster.module";
import { InvitationModule } from "./invitation/invitation.module";
import { OrganizationMemberModule } from "./organizationMember/organizationMember.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { OAuthModule } from "./oauth-client/oauth.module";
import { OAuthModuleOptions } from "./oauth-client/oauth.service";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    OrganizationModule,
    ClusterModule,
    InvitationModule,
    OrganizationMemberModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    OAuthModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: (config: ConfigService): OAuthModuleOptions => {
        const params: OAuthModuleOptions = {
          // set configuration parameters here.
          clientId: config.get('LOGTO_MANAGEMENT_CLIENT_ID') || '',
          clientSecret: config.get('LOGTO_MANAGEMENT_CLIENT_SECRET') || '',
          issuerUrl: config.get('LOGTO_MANAGEMENT_ISSUER_URL') || '',
          audience: config.get('LOGTO_MANAGEMENT_AUDIENCE') || '',
        };
        return params
      }
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {

}
