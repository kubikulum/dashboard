/**
 * Logto API references
 * API references for Logto services.  Note: The documentation is for Logto Cloud. If you are using Logto OSS, please refer to the response of `/api/swagger.json` endpoint on your Logto instance.
 *
 * The version of the OpenAPI document: Cloud
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ListHooks200ResponseInnerConfig } from './listHooks200ResponseInnerConfig';
import { ListHooks200ResponseInnerExecutionStats } from './listHooks200ResponseInnerExecutionStats';


export interface ListHooks200ResponseInner { 
    tenantId: string;
    id: string;
    name: string;
    event: ListHooks200ResponseInner.EventEnum | null;
    events: Array<ListHooks200ResponseInner.EventsEnum>;
    config: ListHooks200ResponseInnerConfig;
    signingKey: string;
    enabled: boolean;
    createdAt: number;
    executionStats?: ListHooks200ResponseInnerExecutionStats;
}
export namespace ListHooks200ResponseInner {
    export type EventEnum = 'PostRegister' | 'PostSignIn' | 'PostResetPassword' | 'User.Created' | 'User.Deleted' | 'User.Data.Updated' | 'User.SuspensionStatus.Updated' | 'Role.Created' | 'Role.Deleted' | 'Role.Data.Updated' | 'Role.Scopes.Updated' | 'Scope.Created' | 'Scope.Deleted' | 'Scope.Data.Updated' | 'Organization.Created' | 'Organization.Deleted' | 'Organization.Data.Updated' | 'Organization.Membership.Updated' | 'OrganizationRole.Created' | 'OrganizationRole.Deleted' | 'OrganizationRole.Data.Updated' | 'OrganizationRole.Scopes.Updated' | 'OrganizationScope.Created' | 'OrganizationScope.Deleted' | 'OrganizationScope.Data.Updated';
    export const EventEnum = {
        PostRegister: 'PostRegister' as EventEnum,
        PostSignIn: 'PostSignIn' as EventEnum,
        PostResetPassword: 'PostResetPassword' as EventEnum,
        UserCreated: 'User.Created' as EventEnum,
        UserDeleted: 'User.Deleted' as EventEnum,
        UserDataUpdated: 'User.Data.Updated' as EventEnum,
        UserSuspensionStatusUpdated: 'User.SuspensionStatus.Updated' as EventEnum,
        RoleCreated: 'Role.Created' as EventEnum,
        RoleDeleted: 'Role.Deleted' as EventEnum,
        RoleDataUpdated: 'Role.Data.Updated' as EventEnum,
        RoleScopesUpdated: 'Role.Scopes.Updated' as EventEnum,
        ScopeCreated: 'Scope.Created' as EventEnum,
        ScopeDeleted: 'Scope.Deleted' as EventEnum,
        ScopeDataUpdated: 'Scope.Data.Updated' as EventEnum,
        OrganizationCreated: 'Organization.Created' as EventEnum,
        OrganizationDeleted: 'Organization.Deleted' as EventEnum,
        OrganizationDataUpdated: 'Organization.Data.Updated' as EventEnum,
        OrganizationMembershipUpdated: 'Organization.Membership.Updated' as EventEnum,
        OrganizationRoleCreated: 'OrganizationRole.Created' as EventEnum,
        OrganizationRoleDeleted: 'OrganizationRole.Deleted' as EventEnum,
        OrganizationRoleDataUpdated: 'OrganizationRole.Data.Updated' as EventEnum,
        OrganizationRoleScopesUpdated: 'OrganizationRole.Scopes.Updated' as EventEnum,
        OrganizationScopeCreated: 'OrganizationScope.Created' as EventEnum,
        OrganizationScopeDeleted: 'OrganizationScope.Deleted' as EventEnum,
        OrganizationScopeDataUpdated: 'OrganizationScope.Data.Updated' as EventEnum
    };
    export type EventsEnum = 'PostRegister' | 'PostSignIn' | 'PostResetPassword' | 'User.Created' | 'User.Deleted' | 'User.Data.Updated' | 'User.SuspensionStatus.Updated' | 'Role.Created' | 'Role.Deleted' | 'Role.Data.Updated' | 'Role.Scopes.Updated' | 'Scope.Created' | 'Scope.Deleted' | 'Scope.Data.Updated' | 'Organization.Created' | 'Organization.Deleted' | 'Organization.Data.Updated' | 'Organization.Membership.Updated' | 'OrganizationRole.Created' | 'OrganizationRole.Deleted' | 'OrganizationRole.Data.Updated' | 'OrganizationRole.Scopes.Updated' | 'OrganizationScope.Created' | 'OrganizationScope.Deleted' | 'OrganizationScope.Data.Updated';
    export const EventsEnum = {
        PostRegister: 'PostRegister' as EventsEnum,
        PostSignIn: 'PostSignIn' as EventsEnum,
        PostResetPassword: 'PostResetPassword' as EventsEnum,
        UserCreated: 'User.Created' as EventsEnum,
        UserDeleted: 'User.Deleted' as EventsEnum,
        UserDataUpdated: 'User.Data.Updated' as EventsEnum,
        UserSuspensionStatusUpdated: 'User.SuspensionStatus.Updated' as EventsEnum,
        RoleCreated: 'Role.Created' as EventsEnum,
        RoleDeleted: 'Role.Deleted' as EventsEnum,
        RoleDataUpdated: 'Role.Data.Updated' as EventsEnum,
        RoleScopesUpdated: 'Role.Scopes.Updated' as EventsEnum,
        ScopeCreated: 'Scope.Created' as EventsEnum,
        ScopeDeleted: 'Scope.Deleted' as EventsEnum,
        ScopeDataUpdated: 'Scope.Data.Updated' as EventsEnum,
        OrganizationCreated: 'Organization.Created' as EventsEnum,
        OrganizationDeleted: 'Organization.Deleted' as EventsEnum,
        OrganizationDataUpdated: 'Organization.Data.Updated' as EventsEnum,
        OrganizationMembershipUpdated: 'Organization.Membership.Updated' as EventsEnum,
        OrganizationRoleCreated: 'OrganizationRole.Created' as EventsEnum,
        OrganizationRoleDeleted: 'OrganizationRole.Deleted' as EventsEnum,
        OrganizationRoleDataUpdated: 'OrganizationRole.Data.Updated' as EventsEnum,
        OrganizationRoleScopesUpdated: 'OrganizationRole.Scopes.Updated' as EventsEnum,
        OrganizationScopeCreated: 'OrganizationScope.Created' as EventsEnum,
        OrganizationScopeDeleted: 'OrganizationScope.Deleted' as EventsEnum,
        OrganizationScopeDataUpdated: 'OrganizationScope.Data.Updated' as EventsEnum
    };
}


