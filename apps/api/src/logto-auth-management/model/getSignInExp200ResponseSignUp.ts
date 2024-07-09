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


/**
 * Sign-up method settings.
 */
export interface GetSignInExp200ResponseSignUp { 
    /**
     * Allowed identifiers when signing-up.
     */
    identifiers: Array<GetSignInExp200ResponseSignUp.IdentifiersEnum>;
    /**
     * Whether the user is required to set a password when signing-up.
     */
    password: boolean;
    /**
     * Whether the user is required to verify their email/phone when signing-up.
     */
    verify: boolean;
}
export namespace GetSignInExp200ResponseSignUp {
    export type IdentifiersEnum = 'username' | 'email' | 'phone';
    export const IdentifiersEnum = {
        Username: 'username' as IdentifiersEnum,
        Email: 'email' as IdentifiersEnum,
        Phone: 'phone' as IdentifiersEnum
    };
}

