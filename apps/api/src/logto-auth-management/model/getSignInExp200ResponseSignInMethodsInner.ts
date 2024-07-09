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


export interface GetSignInExp200ResponseSignInMethodsInner { 
    identifier: GetSignInExp200ResponseSignInMethodsInner.IdentifierEnum;
    password: boolean;
    verificationCode: boolean;
    isPasswordPrimary: boolean;
}
export namespace GetSignInExp200ResponseSignInMethodsInner {
    export type IdentifierEnum = 'username' | 'email' | 'phone';
    export const IdentifierEnum = {
        Username: 'username' as IdentifierEnum,
        Email: 'email' as IdentifierEnum,
        Phone: 'phone' as IdentifierEnum
    };
}


