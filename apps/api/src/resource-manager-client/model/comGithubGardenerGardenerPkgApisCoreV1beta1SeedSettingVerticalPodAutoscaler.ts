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
 * SeedSettingVerticalPodAutoscaler controls certain settings for the vertical pod autoscaler components deployed in the seed.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingVerticalPodAutoscaler { 
    /**
     * Enabled controls whether the VPA components shall be deployed into the garden namespace in the seed cluster. It is enabled by default because Gardener heavily relies on a VPA being deployed. You should only disable this if your seed cluster already has another, manually/custom managed VPA deployment.
     */
    enabled: boolean;
}
