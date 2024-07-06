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
 * SeedSettingDependencyWatchdogWeeder controls the weeder settings for the dependency-watchdog for the seed.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingDependencyWatchdogWeeder { 
    /**
     * Enabled controls whether the endpoint controller(weeder) of the dependency-watchdog should be enabled. This controller helps to alleviate the delay where control plane components remain unavailable by finding the respective pods in CrashLoopBackoff status and restarting them once their dependants become ready and available again.
     */
    enabled: boolean;
}
