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
 * Volume contains information about the volume type, size, and encryption.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1Volume { 
    /**
     * Encrypted determines if the volume should be encrypted.
     */
    encrypted?: boolean;
    /**
     * Name of the volume to make it referencable.
     */
    name?: string;
    /**
     * VolumeSize is the size of the volume.
     */
    size: string;
    /**
     * Type is the type of the volume.
     */
    type?: string;
}

