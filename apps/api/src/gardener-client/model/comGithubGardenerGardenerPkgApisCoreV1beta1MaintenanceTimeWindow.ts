/**
 * Gardener
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.98.0-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * MaintenanceTimeWindow contains information about the time window for maintenance operations.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1MaintenanceTimeWindow { 
    /**
     * Begin is the beginning of the time window in the format HHMMSS+ZONE, e.g. \"220000+0100\". If not present, a random value will be computed.
     */
    begin: string;
    /**
     * End is the end of the time window in the format HHMMSS+ZONE, e.g. \"220000+0100\". If not present, the value will be computed based on the \"Begin\" value.
     */
    end: string;
}

