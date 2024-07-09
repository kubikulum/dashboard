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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1MachineTypeStorage } from './comGithubGardenerGardenerPkgApisCoreV1beta1MachineTypeStorage';
import { IoK8sApimachineryPkgApiResourceQuantity } from './ioK8sApimachineryPkgApiResourceQuantity';


/**
 * MachineType contains certain properties of a machine type.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1MachineType { 
    /**
     * Architecture is the CPU architecture of this machine type.
     */
    architecture?: string;
    /**
     * CPU is the number of CPUs for this machine type.
     */
    cpu: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * GPU is the number of GPUs for this machine type.
     */
    gpu: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * Memory is the amount of memory for this machine type.
     */
    memory: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * Name is the name of the machine type.
     */
    name: string;
    /**
     * Storage is the amount of storage associated with the root volume of this machine type.
     */
    storage?: ComGithubGardenerGardenerPkgApisCoreV1beta1MachineTypeStorage;
    /**
     * Usable defines if the machine type can be used for shoot clusters.
     */
    usable?: boolean;
}

