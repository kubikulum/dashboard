/**
 * Kubernetes CRD Swagger
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * machineDeploymentClass selects templates referenced in specific MachineDeploymentClasses in .spec.workers.machineDeployments.
 */
export interface IoXK8sClusterV1beta1ClusterClassSpecPatchesInnerDefinitionsInnerSelectorMatchResourcesMachineDeploymentClass { 
    /**
     * names selects templates by class names.
     */
    names?: Array<string>;
}

