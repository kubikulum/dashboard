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


/**
 * MachineTypeStorage is the amount of storage associated with the root volume of this machine type.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1MachineTypeStorage { 
    /**
     * Class is the class of the storage type.
     */
    _class: string;
    /**
     * MinSize is the minimal supported storage size. This overrides any other common minimum size configuration from `spec.volumeTypes[*].minSize`.
     */
    minSize?: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * StorageSize is the storage size.
     */
    size?: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * Type is the type of the storage.
     */
    type: string;
}

