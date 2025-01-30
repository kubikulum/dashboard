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
import { IoXK8sClusterV1beta1MachineDeploymentStatusV1beta2 } from './ioXK8sClusterV1beta1MachineDeploymentStatusV1beta2';


/**
 * MachineDeploymentStatus defines the observed state of MachineDeployment.
 */
export interface IoXK8sClusterV1beta1MachineDeploymentStatus { 
    /**
     * Total number of available machines (ready for at least minReadySeconds) targeted by this deployment.
     */
    availableReplicas?: number;
    /**
     * conditions defines current service state of the MachineDeployment.
     */
    conditions?: Array<IoXK8sClusterV1beta1ClusterStatusConditionsInner>;
    /**
     * The generation observed by the deployment controller.
     */
    observedGeneration?: number;
    /**
     * phase represents the current phase of a MachineDeployment (ScalingUp, ScalingDown, Running, Failed, or Unknown).
     */
    phase?: string;
    /**
     * Total number of ready machines targeted by this deployment.
     */
    readyReplicas?: number;
    /**
     * Total number of non-terminated machines targeted by this deployment (their labels match the selector).
     */
    replicas?: number;
    /**
     * selector is the same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
     */
    selector?: string;
    /**
     * Total number of unavailable machines targeted by this deployment. This is the total number of machines that are still required for the deployment to have 100% available capacity. They may either be machines that are running but not yet available or machines that still have not been created.  Deprecated: This field is deprecated and is going to be removed in the next apiVersion. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
     */
    unavailableReplicas?: number;
    /**
     * Total number of non-terminated machines targeted by this deployment that have the desired template spec.
     */
    updatedReplicas?: number;
    v1beta2?: IoXK8sClusterV1beta1MachineDeploymentStatusV1beta2;
}

