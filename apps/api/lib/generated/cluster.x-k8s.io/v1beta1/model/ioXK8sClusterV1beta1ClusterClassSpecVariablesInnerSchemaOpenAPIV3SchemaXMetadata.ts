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
 * x-metadata is the metadata of a variable or a nested field within a variable. It can be used to add additional data for higher level tools.
 */
export interface IoXK8sClusterV1beta1ClusterClassSpecVariablesInnerSchemaOpenAPIV3SchemaXMetadata { 
    /**
     * annotations is an unstructured key value map that can be used to store and retrieve arbitrary metadata. They are not queryable.
     */
    annotations?: { [key: string]: string; };
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) variables.
     */
    labels?: { [key: string]: string; };
}

