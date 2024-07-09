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
import { GetJwtCustomizer200ResponseOneOfTokenSampleAud } from './getJwtCustomizer200ResponseOneOfTokenSampleAud';


export interface GetJwtCustomizer200ResponseOneOfTokenSample { 
    jti?: string;
    aud?: GetJwtCustomizer200ResponseOneOfTokenSampleAud;
    scope?: string;
    clientId?: string;
    accountId?: string;
    expiresWithSession?: boolean;
    grantId?: string;
    gty?: string;
    sessionUid?: string;
    sid?: string;
    kind?: string;
}
