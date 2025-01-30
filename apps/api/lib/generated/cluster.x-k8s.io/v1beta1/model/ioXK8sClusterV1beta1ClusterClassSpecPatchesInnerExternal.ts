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
 * external defines an external patch. Note: Exactly one of Definitions or External must be set.
 */
export interface IoXK8sClusterV1beta1ClusterClassSpecPatchesInnerExternal { 
    /**
     * discoverVariablesExtension references an extension which is called to discover variables.
     */
    discoverVariablesExtension?: string;
    /**
     * generateExtension references an extension which is called to generate patches.
     */
    generateExtension?: string;
    /**
     * settings defines key value pairs to be passed to the extensions. Values defined here take precedence over the values defined in the corresponding ExtensionConfig.
     */
    settings?: { [key: string]: string; };
    /**
     * validateExtension references an extension which is called to validate the topology.
     */
    validateExtension?: string;
}

