import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AsyncConfiguration, Configuration, ConfigurationFactory } from './configuration';

import { ApplicationsService } from './api/applications.service';
import { AuditLogsService } from './api/auditLogs.service';
import { AuthnService } from './api/authn.service';
import { ConfigsService } from './api/configs.service';
import { ConnectorFactoriesService } from './api/connectorFactories.service';
import { ConnectorsService } from './api/connectors.service';
import { CustomPhrasesService } from './api/customPhrases.service';
import { DashboardService } from './api/dashboard.service';
import { DomainsService } from './api/domains.service';
import { HooksService } from './api/hooks.service';
import { InteractionService } from './api/interaction.service';
import { OrganizationInvitationsService } from './api/organizationInvitations.service';
import { OrganizationRolesService } from './api/organizationRoles.service';
import { OrganizationScopesService } from './api/organizationScopes.service';
import { OrganizationsService } from './api/organizations.service';
import { ResourcesService } from './api/resources.service';
import { RolesService } from './api/roles.service';
import { SSOConnectorProvidersService } from './api/sSOConnectorProviders.service';
import { SSOConnectorsService } from './api/sSOConnectors.service';
import { SignInExperienceService } from './api/signInExperience.service';
import { StatusService } from './api/status.service';
import { SwaggerJsonService } from './api/swaggerJson.service';
import { SystemsService } from './api/systems.service';
import { UserAssetsService } from './api/userAssets.service';
import { UsersService } from './api/users.service';
import { VerificationCodesService } from './api/verificationCodes.service';
import { WellKnownService } from './api/wellKnown.service';

@Global()
@Module({
  imports:      [ HttpModule ],
  exports:      [
    ApplicationsService,
    AuditLogsService,
    AuthnService,
    ConfigsService,
    ConnectorFactoriesService,
    ConnectorsService,
    CustomPhrasesService,
    DashboardService,
    DomainsService,
    HooksService,
    InteractionService,
    OrganizationInvitationsService,
    OrganizationRolesService,
    OrganizationScopesService,
    OrganizationsService,
    ResourcesService,
    RolesService,
    SSOConnectorProvidersService,
    SSOConnectorsService,
    SignInExperienceService,
    StatusService,
    SwaggerJsonService,
    SystemsService,
    UserAssetsService,
    UsersService,
    VerificationCodesService,
    WellKnownService
  ],
  providers: [
    ApplicationsService,
    AuditLogsService,
    AuthnService,
    ConfigsService,
    ConnectorFactoriesService,
    ConnectorsService,
    CustomPhrasesService,
    DashboardService,
    DomainsService,
    HooksService,
    InteractionService,
    OrganizationInvitationsService,
    OrganizationRolesService,
    OrganizationScopesService,
    OrganizationsService,
    ResourcesService,
    RolesService,
    SSOConnectorProvidersService,
    SSOConnectorsService,
    SignInExperienceService,
    StatusService,
    SwaggerJsonService,
    SystemsService,
    UserAssetsService,
    UsersService,
    VerificationCodesService,
    WellKnownService
  ]
})
export class LogtoApiManagementModule {
    public static forRoot(configurationFactory: () => Configuration): DynamicModule {
        return {
            module: LogtoApiManagementModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    /**
     * Register the module asynchronously.
     */
    static forRootAsync(options: AsyncConfiguration): DynamicModule {
        const providers = [...this.createAsyncProviders(options)];
        return {
            module: LogtoApiManagementModule,
            imports: options.imports || [],
            providers,
            exports: providers,
        };
    }

    private static createAsyncProviders(options: AsyncConfiguration): Provider[] {
        if (options.useClass) {
            return [
                this.createAsyncConfigurationProvider(options),
                {
                    provide: options.useClass,
                    useClass: options.useClass,
                },
            ];
        }
        return [this.createAsyncConfigurationProvider(options)];
    }

    private static createAsyncConfigurationProvider(
        options: AsyncConfiguration,
    ): Provider {
        if (options.useFactory) {
            return {
                provide: Configuration,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: Configuration,
            useFactory: async (optionsFactory: ConfigurationFactory) =>
                await optionsFactory.createConfiguration(),
            inject: (options.useExisting && [options.useExisting]) || (options.useClass && [options.useClass]) || [],
        };
    }

    constructor( httpService: HttpService) { }
}
