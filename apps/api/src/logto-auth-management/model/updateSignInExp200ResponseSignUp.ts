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


export interface UpdateSignInExp200ResponseSignUp { 
    identifiers: Array<UpdateSignInExp200ResponseSignUp.IdentifiersEnum>;
    password: boolean;
    verify: boolean;
}
export namespace UpdateSignInExp200ResponseSignUp {
    export type IdentifiersEnum = 'username' | 'email' | 'phone';
    export const IdentifiersEnum = {
        Username: 'username' as IdentifiersEnum,
        Email: 'email' as IdentifiersEnum,
        Phone: 'phone' as IdentifiersEnum
    };
}


