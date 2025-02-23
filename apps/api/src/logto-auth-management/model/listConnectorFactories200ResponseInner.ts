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
import { ListConnectors200ResponseInnerFormItemsInner } from './listConnectors200ResponseInnerFormItemsInner';


export interface ListConnectorFactories200ResponseInner { 
    type: ListConnectorFactories200ResponseInner.TypeEnum;
    isDemo?: boolean;
    id: string;
    target: string;
    /**
     * Validator function
     */
    name: object;
    /**
     * Validator function
     */
    description: object;
    logo: string;
    logoDark: string | null;
    readme: string;
    configTemplate?: string;
    formItems?: Array<ListConnectors200ResponseInnerFormItemsInner>;
    customData?: { [key: string]: any; };
    fromEmail?: string;
    platform: ListConnectorFactories200ResponseInner.PlatformEnum | null;
    isStandard?: boolean;
}
export namespace ListConnectorFactories200ResponseInner {
    export type TypeEnum = 'Email' | 'Sms' | 'Social';
    export const TypeEnum = {
        Email: 'Email' as TypeEnum,
        Sms: 'Sms' as TypeEnum,
        Social: 'Social' as TypeEnum
    };
    export type PlatformEnum = 'Native' | 'Universal' | 'Web';
    export const PlatformEnum = {
        Native: 'Native' as PlatformEnum,
        Universal: 'Universal' as PlatformEnum,
        Web: 'Web' as PlatformEnum
    };
}


