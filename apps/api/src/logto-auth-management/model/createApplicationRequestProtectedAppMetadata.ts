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
 * The data for protected app, this feature is not available for open source version.
 */
export interface CreateApplicationRequestProtectedAppMetadata { 
    /**
     * The subdomain prefix, e.g., my-site.
     */
    subDomain: string;
    /**
     * The origin of target website, e.g., https://example.com.
     */
    origin: string;
}

