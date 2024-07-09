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
 * MachineControllerManagerSettings contains configurations for different worker-pools. Eg. MachineDrainTimeout, MachineHealthTimeout.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1MachineControllerManagerSettings { 
    /**
     * MachineCreationTimeout is the period after which creation of the machine is declared failed.
     */
    machineCreationTimeout?: string;
    /**
     * MachineDrainTimeout is the period after which machine is forcefully deleted.
     */
    machineDrainTimeout?: string;
    /**
     * MachineHealthTimeout is the period after which machine is declared failed.
     */
    machineHealthTimeout?: string;
    /**
     * MaxEvictRetries are the number of eviction retries on a pod after which drain is declared failed, and forceful deletion is triggered.
     */
    maxEvictRetries?: number;
    /**
     * NodeConditions are the set of conditions if set to true for the period of MachineHealthTimeout, machine will be declared failed.
     */
    nodeConditions?: Array<string>;
}

