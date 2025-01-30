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
import { IoXK8sClusterV1beta1ClusterStatusConditionsInner } from './ioXK8sClusterV1beta1ClusterStatusConditionsInner';
import { IoXK8sClusterV1beta1MachineHealthCheckStatusV1beta2 } from './ioXK8sClusterV1beta1MachineHealthCheckStatusV1beta2';


/**
 * Most recently observed status of MachineHealthCheck resource
 */
export interface IoXK8sClusterV1beta1MachineHealthCheckStatus { 
    /**
     * conditions defines current service state of the MachineHealthCheck.
     */
    conditions?: Array<IoXK8sClusterV1beta1ClusterStatusConditionsInner>;
    /**
     * total number of healthy machines counted by this machine health check
     */
    currentHealthy?: number;
    /**
     * total number of machines counted by this machine health check
     */
    expectedMachines?: number;
    /**
     * observedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * remediationsAllowed is the number of further remediations allowed by this machine health check before maxUnhealthy short circuiting will be applied
     */
    remediationsAllowed?: number;
    /**
     * targets shows the current list of machines the machine health check is watching
     */
    targets?: Array<string>;
    v1beta2?: IoXK8sClusterV1beta1MachineHealthCheckStatusV1beta2;
}

