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


export interface ListApplicationOrganizations200ResponseInner { 
    tenantId: string;
    id: string;
    name: string;
    description: string | null;
    /**
     * arbitrary
     */
    customData: object;
    isMfaRequired: boolean;
    createdAt: number;
    organizationRoles: Array<ListApplicationOrganizations200ResponseInnerOrganizationRolesInner>;
}

