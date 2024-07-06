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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingExcessCapacityReservationConfig } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingExcessCapacityReservationConfig';


/**
 * SeedSettingExcessCapacityReservation controls the excess capacity reservation for shoot control planes in the seed.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingExcessCapacityReservation { 
    /**
     * Configs configures excess capacity reservation deployments for shoot control planes in the seed.
     */
    configs?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingExcessCapacityReservationConfig>;
    /**
     * Enabled controls whether the default excess capacity reservation should be enabled. When not specified, the functionality is enabled.
     */
    enabled?: boolean;
}
