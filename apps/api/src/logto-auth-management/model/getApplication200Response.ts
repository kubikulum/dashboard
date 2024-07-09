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
import { ListApplications200ResponseInnerProtectedAppMetadata } from './listApplications200ResponseInnerProtectedAppMetadata';
import { ListApplications200ResponseInnerCustomClientMetadata } from './listApplications200ResponseInnerCustomClientMetadata';
import { ListApplications200ResponseInnerOidcClientMetadata } from './listApplications200ResponseInnerOidcClientMetadata';


export interface GetApplication200Response { 
    tenantId: string;
    id: string;
    name: string;
    secret: string;
    description: string | null;
    type: GetApplication200Response.TypeEnum;
    oidcClientMetadata: ListApplications200ResponseInnerOidcClientMetadata;
    customClientMetadata: ListApplications200ResponseInnerCustomClientMetadata;
    protectedAppMetadata: ListApplications200ResponseInnerProtectedAppMetadata | null;
    isThirdParty: boolean;
    createdAt: number;
    isAdmin: boolean;
}
export namespace GetApplication200Response {
    export type TypeEnum = 'Native' | 'SPA' | 'Traditional' | 'MachineToMachine' | 'Protected';
    export const TypeEnum = {
        Native: 'Native' as TypeEnum,
        Spa: 'SPA' as TypeEnum,
        Traditional: 'Traditional' as TypeEnum,
        MachineToMachine: 'MachineToMachine' as TypeEnum,
        Protected: 'Protected' as TypeEnum
    };
}

