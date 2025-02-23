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
import { ListApplicationOrganizations200ResponseInnerOrganizationRolesInner } from './listApplicationOrganizations200ResponseInnerOrganizationRolesInner';
import { ListOrganizationRoles200ResponseInnerResourceScopesInner } from './listOrganizationRoles200ResponseInnerResourceScopesInner';


export interface ListOrganizationRoles200ResponseInner { 
    tenantId: string;
    id: string;
    name: string;
    description: string | null;
    type: ListOrganizationRoles200ResponseInner.TypeEnum;
    scopes: Array<ListApplicationOrganizations200ResponseInnerOrganizationRolesInner>;
    resourceScopes: Array<ListOrganizationRoles200ResponseInnerResourceScopesInner>;
}
export namespace ListOrganizationRoles200ResponseInner {
    export type TypeEnum = 'User' | 'MachineToMachine';
    export const TypeEnum = {
        User: 'User' as TypeEnum,
        MachineToMachine: 'MachineToMachine' as TypeEnum
    };
}


