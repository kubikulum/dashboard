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


export interface CreateConnectorAuthorizationUriRequest { 
    /**
     * A random string generated on the client side to prevent CSRF (Cross-Site Request Forgery) attacks.
     */
    state: string;
    /**
     * The URI to navigate back to after the user is authenticated by the connected social identity provider and has granted access to the connector.
     */
    redirectUri: string;
}

