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
import { GetUser200ResponseSsoIdentitiesInner } from './getUser200ResponseSsoIdentitiesInner';
import { GetJwtCustomizer200ResponseOneOfContextSampleUserIdentitiesValue } from './getJwtCustomizer200ResponseOneOfContextSampleUserIdentitiesValue';
import { GetJwtCustomizer200ResponseOneOfContextSampleUserProfile } from './getJwtCustomizer200ResponseOneOfContextSampleUserProfile';


export interface GetUser200Response { 
    id: string;
    username: string | null;
    primaryEmail: string | null;
    primaryPhone: string | null;
    name: string | null;
    avatar: string | null;
    /**
     * arbitrary
     */
    customData: object;
    identities: { [key: string]: GetJwtCustomizer200ResponseOneOfContextSampleUserIdentitiesValue; };
    lastSignInAt: number | null;
    createdAt: number;
    updatedAt: number;
    profile: GetJwtCustomizer200ResponseOneOfContextSampleUserProfile;
    applicationId: string | null;
    isSuspended: boolean;
    hasPassword?: boolean;
    /**
     * List of SSO identities associated with the user. Only available when the `includeSsoIdentities` query parameter is provided with a truthy value.
     */
    ssoIdentities?: Array<GetUser200ResponseSsoIdentitiesInner>;
}

