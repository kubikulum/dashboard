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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ShootMachineImage } from './comGithubGardenerGardenerPkgApisCoreV1beta1ShootMachineImage';


/**
 * Machine contains information about the machine type and image.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1Machine { 
    /**
     * Architecture is CPU architecture of machines in this worker pool.
     */
    architecture?: string;
    /**
     * Image holds information about the machine image to use for all nodes of this pool. It will default to the latest version of the first image stated in the referenced CloudProfile if no value has been provided.
     */
    image?: ComGithubGardenerGardenerPkgApisCoreV1beta1ShootMachineImage;
    /**
     * Type is the machine type of the worker group.
     */
    type: string;
}
