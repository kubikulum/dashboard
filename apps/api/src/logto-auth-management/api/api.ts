export * from './applications.service';
import { ApplicationsService } from './applications.service';
export * from './auditLogs.service';
import { AuditLogsService } from './auditLogs.service';
export * from './authn.service';
import { AuthnService } from './authn.service';
export * from './configs.service';
import { ConfigsService } from './configs.service';
export * from './connectorFactories.service';
import { ConnectorFactoriesService } from './connectorFactories.service';
export * from './connectors.service';
import { ConnectorsService } from './connectors.service';
export * from './customPhrases.service';
import { CustomPhrasesService } from './customPhrases.service';
export * from './dashboard.service';
import { DashboardService } from './dashboard.service';
export * from './domains.service';
import { DomainsService } from './domains.service';
export * from './hooks.service';
import { HooksService } from './hooks.service';
export * from './interaction.service';
import { InteractionService } from './interaction.service';
export * from './organizationInvitations.service';
import { OrganizationInvitationsService } from './organizationInvitations.service';
export * from './organizationRoles.service';
import { OrganizationRolesService } from './organizationRoles.service';
export * from './organizationScopes.service';
import { OrganizationScopesService } from './organizationScopes.service';
export * from './organizations.service';
import { OrganizationsService } from './organizations.service';
export * from './resources.service';
import { ResourcesService } from './resources.service';
export * from './roles.service';
import { RolesService } from './roles.service';
export * from './sSOConnectorProviders.service';
import { SSOConnectorProvidersService } from './sSOConnectorProviders.service';
export * from './sSOConnectors.service';
import { SSOConnectorsService } from './sSOConnectors.service';
export * from './signInExperience.service';
import { SignInExperienceService } from './signInExperience.service';
export * from './status.service';
import { StatusService } from './status.service';
export * from './swaggerJson.service';
import { SwaggerJsonService } from './swaggerJson.service';
export * from './systems.service';
import { SystemsService } from './systems.service';
export * from './userAssets.service';
import { UserAssetsService } from './userAssets.service';
export * from './users.service';
import { UsersService } from './users.service';
export * from './verificationCodes.service';
import { VerificationCodesService } from './verificationCodes.service';
export * from './wellKnown.service';
import { WellKnownService } from './wellKnown.service';
export const APIS = [ApplicationsService, AuditLogsService, AuthnService, ConfigsService, ConnectorFactoriesService, ConnectorsService, CustomPhrasesService, DashboardService, DomainsService, HooksService, InteractionService, OrganizationInvitationsService, OrganizationRolesService, OrganizationScopesService, OrganizationsService, ResourcesService, RolesService, SSOConnectorProvidersService, SSOConnectorsService, SignInExperienceService, StatusService, SwaggerJsonService, SystemsService, UserAssetsService, UsersService, VerificationCodesService, WellKnownService];
