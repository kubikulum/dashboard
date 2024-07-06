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
 * ControllerResourceLifecycle defines the lifecycle of a controller resource.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ControllerResourceLifecycle { 
    /**
     * Delete defines the strategy during deletion.
     */
    _delete?: string;
    /**
     * Migrate defines the strategy during migration.
     */
    migrate?: string;
    /**
     * Reconcile defines the strategy during reconciliation.
     */
    reconcile?: string;
}
