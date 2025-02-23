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
import { IoXK8sClusterV1beta1ClusterStatusV1beta2ControlPlane } from './ioXK8sClusterV1beta1ClusterStatusV1beta2ControlPlane';
import { IoXK8sClusterV1beta1ClusterStatusV1beta2Workers } from './ioXK8sClusterV1beta1ClusterStatusV1beta2Workers';
import { IoXK8sClusterV1beta1ClusterStatusV1beta2ConditionsInner } from './ioXK8sClusterV1beta1ClusterStatusV1beta2ConditionsInner';


/**
 * v1beta2 groups all the fields that will be added or modified in Cluster\'s status with the V1Beta2 version.
 */
export interface IoXK8sClusterV1beta1ClusterStatusV1beta2 { 
    /**
     * conditions represents the observations of a Cluster\'s current state. Known condition types are Available, InfrastructureReady, ControlPlaneInitialized, ControlPlaneAvailable, WorkersAvailable, MachinesReady MachinesUpToDate, RemoteConnectionProbe, ScalingUp, ScalingDown, Remediating, Deleting, Paused. Additionally, a TopologyReconciled condition will be added in case the Cluster is referencing a ClusterClass / defining a managed Topology.
     */
    conditions?: Array<IoXK8sClusterV1beta1ClusterStatusV1beta2ConditionsInner>;
    controlPlane?: IoXK8sClusterV1beta1ClusterStatusV1beta2ControlPlane;
    workers?: IoXK8sClusterV1beta1ClusterStatusV1beta2Workers;
}

