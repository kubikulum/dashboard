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
 * metadata is the metadata of a variable. It can be used to add additional data for higher level tools to a ClusterClassVariable.  Deprecated: This field is deprecated and is going to be removed in the next apiVersion. Please use XMetadata in JSONSchemaProps instead.
 */
export interface IoXK8sClusterV1beta1ClusterClassSpecVariablesInnerMetadata { 
    /**
     * annotations is an unstructured key value map that can be used to store and retrieve arbitrary metadata. They are not queryable.
     */
    annotations?: { [key: string]: string; };
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) variables.
     */
    labels?: { [key: string]: string; };
}

