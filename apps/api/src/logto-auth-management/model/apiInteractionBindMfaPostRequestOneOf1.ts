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
import { ApiInteractionBindMfaPostRequestOneOf1Response } from './apiInteractionBindMfaPostRequestOneOf1Response';
import { ApiInteractionBindMfaPostRequestOneOf1ClientExtensionResults } from './apiInteractionBindMfaPostRequestOneOf1ClientExtensionResults';


export interface ApiInteractionBindMfaPostRequestOneOf1 { 
    type: string;
    id: string;
    rawId: string;
    response: ApiInteractionBindMfaPostRequestOneOf1Response;
    authenticatorAttachment?: ApiInteractionBindMfaPostRequestOneOf1.AuthenticatorAttachmentEnum;
    clientExtensionResults: ApiInteractionBindMfaPostRequestOneOf1ClientExtensionResults;
}
export namespace ApiInteractionBindMfaPostRequestOneOf1 {
    export type AuthenticatorAttachmentEnum = 'cross-platform' | 'platform';
    export const AuthenticatorAttachmentEnum = {
        CrossPlatform: 'cross-platform' as AuthenticatorAttachmentEnum,
        Platform: 'platform' as AuthenticatorAttachmentEnum
    };
}


