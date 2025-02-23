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
 * UnhealthyCondition represents a Node condition type and value with a timeout specified as a duration.  When the named condition has been in the given status for at least the timeout value, a node is considered unhealthy.
 */
export interface IoXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsInner { 
    status: string;
    timeout: string;
    type: string;
}

