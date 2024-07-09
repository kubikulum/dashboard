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
import { CreateApplicationRequestProtectedAppMetadata } from './createApplicationRequestProtectedAppMetadata';
import { ListApplications200ResponseInnerCustomClientMetadata } from './listApplications200ResponseInnerCustomClientMetadata';
import { ListApplications200ResponseInnerOidcClientMetadata } from './listApplications200ResponseInnerOidcClientMetadata';


export interface CreateApplicationRequest { 
    name: string;
    description?: string | null;
    type: CreateApplicationRequest.TypeEnum;
    oidcClientMetadata?: ListApplications200ResponseInnerOidcClientMetadata;
    customClientMetadata?: ListApplications200ResponseInnerCustomClientMetadata;
    isThirdParty?: boolean;
    protectedAppMetadata?: CreateApplicationRequestProtectedAppMetadata;
}
export namespace CreateApplicationRequest {
    export type TypeEnum = 'Native' | 'SPA' | 'Traditional' | 'MachineToMachine' | 'Protected';
    export const TypeEnum = {
        Native: 'Native' as TypeEnum,
        Spa: 'SPA' as TypeEnum,
        Traditional: 'Traditional' as TypeEnum,
        MachineToMachine: 'MachineToMachine' as TypeEnum,
        Protected: 'Protected' as TypeEnum
    };
}

