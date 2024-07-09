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


export interface ReplaceApplicationUserConsentOrganizationsRequest { 
    /**
     * A list of organization ids to be granted. <br/> All the existing organizations\' access will be revoked if not in the list. <br/> If the list is empty, all the organizations\' access will be revoked.
     */
    organizationIds: Array<string>;
}

