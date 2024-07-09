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
import { IoK8sApimachineryPkgApiResourceQuantity } from './ioK8sApimachineryPkgApiResourceQuantity';
import { IoK8sApiCoreV1Toleration } from './ioK8sApiCoreV1Toleration';


/**
 * SeedSettingExcessCapacityReservationConfig configures excess capacity reservation deployments for shoot control planes in the seed.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingExcessCapacityReservationConfig { 
    /**
     * NodeSelector specifies the node where the excess-capacity-reservation pod should run.
     */
    nodeSelector?: { [key: string]: string; };
    /**
     * Resources specify the resource requests and limits of the excess-capacity-reservation pod.
     */
    resources: { [key: string]: IoK8sApimachineryPkgApiResourceQuantity; };
    /**
     * Tolerations specify the tolerations for the the excess-capacity-reservation pod.
     */
    tolerations?: Array<IoK8sApiCoreV1Toleration>;
}

