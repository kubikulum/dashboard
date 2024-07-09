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
import { UpdateSignInExpRequestLanguageInfo } from './updateSignInExpRequestLanguageInfo';
import { UpdateSignInExpRequestSignUp } from './updateSignInExpRequestSignUp';
import { UpdateSignInExpRequestTermsOfUseUrl } from './updateSignInExpRequestTermsOfUseUrl';
import { ApiInteractionConsentGet200ResponseApplicationBranding } from './apiInteractionConsentGet200ResponseApplicationBranding';
import { GetSignInExp200ResponseMfa } from './getSignInExp200ResponseMfa';
import { GetSignInExp200ResponseSocialSignIn } from './getSignInExp200ResponseSocialSignIn';
import { UpdateSignInExpRequestColor } from './updateSignInExpRequestColor';
import { GetSignInExp200ResponsePasswordPolicy } from './getSignInExp200ResponsePasswordPolicy';
import { UpdateSignInExpRequestSignIn } from './updateSignInExpRequestSignIn';


export interface UpdateSignInExpRequest { 
    tenantId?: string;
    color?: UpdateSignInExpRequestColor;
    branding?: ApiInteractionConsentGet200ResponseApplicationBranding;
    languageInfo?: UpdateSignInExpRequestLanguageInfo;
    agreeToTermsPolicy?: UpdateSignInExpRequest.AgreeToTermsPolicyEnum;
    signIn?: UpdateSignInExpRequestSignIn;
    signUp?: UpdateSignInExpRequestSignUp;
    socialSignIn?: GetSignInExp200ResponseSocialSignIn;
    /**
     * Specify the social sign-in connectors to display on the sign-in page.
     */
    socialSignInConnectorTargets?: Array<string>;
    signInMode?: UpdateSignInExpRequest.SignInModeEnum;
    customCss?: string | null;
    /**
     * Custom content to display on experience flow pages. the page pathname will be the config key, the content will be the config value.
     */
    customContent?: { [key: string]: string; };
    customUiAssetId?: string | null;
    passwordPolicy?: GetSignInExp200ResponsePasswordPolicy;
    mfa?: GetSignInExp200ResponseMfa;
    singleSignOnEnabled?: boolean;
    termsOfUseUrl?: UpdateSignInExpRequestTermsOfUseUrl;
    privacyPolicyUrl?: UpdateSignInExpRequestTermsOfUseUrl;
}
export namespace UpdateSignInExpRequest {
    export type AgreeToTermsPolicyEnum = 'Automatic' | 'ManualRegistrationOnly' | 'Manual';
    export const AgreeToTermsPolicyEnum = {
        Automatic: 'Automatic' as AgreeToTermsPolicyEnum,
        ManualRegistrationOnly: 'ManualRegistrationOnly' as AgreeToTermsPolicyEnum,
        Manual: 'Manual' as AgreeToTermsPolicyEnum
    };
    export type SignInModeEnum = 'SignIn' | 'Register' | 'SignInAndRegister';
    export const SignInModeEnum = {
        SignIn: 'SignIn' as SignInModeEnum,
        Register: 'Register' as SignInModeEnum,
        SignInAndRegister: 'SignInAndRegister' as SignInModeEnum
    };
}


