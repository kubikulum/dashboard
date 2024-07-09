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
import { ApiInteractionConsentGet200ResponseOrganizationsInnerMissingResourceScopesInnerScopesInner } from './apiInteractionConsentGet200ResponseOrganizationsInnerMissingResourceScopesInnerScopesInner';
import { ApiInteractionConsentGet200ResponseOrganizationsInnerMissingResourceScopesInnerResource } from './apiInteractionConsentGet200ResponseOrganizationsInnerMissingResourceScopesInnerResource';


export interface ApiInteractionConsentGet200ResponseOrganizationsInnerMissingResourceScopesInner { 
    resource: ApiInteractionConsentGet200ResponseOrganizationsInnerMissingResourceScopesInnerResource;
    scopes: Array<ApiInteractionConsentGet200ResponseOrganizationsInnerMissingResourceScopesInnerScopesInner>;
}
