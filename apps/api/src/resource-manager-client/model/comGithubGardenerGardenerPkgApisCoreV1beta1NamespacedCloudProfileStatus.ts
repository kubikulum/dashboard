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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1CloudProfileSpec } from './comGithubGardenerGardenerPkgApisCoreV1beta1CloudProfileSpec';


/**
 * NamespacedCloudProfileStatus holds the most recently observed status of the NamespacedCloudProfile.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1NamespacedCloudProfileStatus { 
    /**
     * CloudProfile is the most recently generated CloudProfile of the NamespacedCloudProfile.
     */
    cloudProfileSpec?: ComGithubGardenerGardenerPkgApisCoreV1beta1CloudProfileSpec;
    /**
     * ObservedGeneration is the most recent generation observed for this project.
     */
    observedGeneration?: number;
}

