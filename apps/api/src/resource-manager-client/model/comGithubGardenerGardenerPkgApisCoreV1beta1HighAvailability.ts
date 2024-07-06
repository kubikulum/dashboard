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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1FailureTolerance } from './comGithubGardenerGardenerPkgApisCoreV1beta1FailureTolerance';


/**
 * HighAvailability specifies the configuration settings for high availability for a resource. Typical usages could be to configure HA for shoot control plane or for seed system components.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1HighAvailability { 
    /**
     * FailureTolerance holds information about failure tolerance level of a highly available resource.
     */
    failureTolerance: ComGithubGardenerGardenerPkgApisCoreV1beta1FailureTolerance;
}
