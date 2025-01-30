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
 * ClusterAvailabilityGate contains the type of a Cluster condition to be used as availability gate.
 */
export interface IoXK8sClusterV1beta1ClusterSpecAvailabilityGatesInner { 
    /**
     * conditionType refers to a positive polarity condition (status true means good) with matching type in the Cluster\'s condition list. If the conditions doesn\'t exist, it will be treated as unknown. Note: Both Cluster API conditions or conditions added by 3rd party controllers can be used as availability gates.
     */
    conditionType: string;
}

