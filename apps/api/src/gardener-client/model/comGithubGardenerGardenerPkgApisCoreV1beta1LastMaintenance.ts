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
 * LastMaintenance holds information about a maintenance operation on the Shoot.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1LastMaintenance { 
    /**
     * A human-readable message containing details about the operations performed in the last maintenance.
     */
    description: string;
    /**
     * FailureReason holds the information about the last maintenance operation failure reason.
     */
    failureReason?: string;
    /**
     * Status of the last maintenance operation, one of Processing, Succeeded, Error.
     */
    state: string;
    /**
     * TriggeredTime is the time when maintenance was triggered.
     */
    triggeredTime: string;
}
