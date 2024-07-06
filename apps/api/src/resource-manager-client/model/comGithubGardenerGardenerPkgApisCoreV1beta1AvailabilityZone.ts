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
 * AvailabilityZone is an availability zone.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1AvailabilityZone { 
    /**
     * Name is an availability zone name.
     */
    name: string;
    /**
     * UnavailableMachineTypes is a list of machine type names that are not availability in this zone.
     */
    unavailableMachineTypes?: Array<string>;
    /**
     * UnavailableVolumeTypes is a list of volume type names that are not availability in this zone.
     */
    unavailableVolumeTypes?: Array<string>;
}
