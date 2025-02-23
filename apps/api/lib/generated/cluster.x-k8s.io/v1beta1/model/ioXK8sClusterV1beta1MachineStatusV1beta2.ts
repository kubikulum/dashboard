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
import { IoXK8sClusterV1beta1ClusterStatusV1beta2ConditionsInner } from './ioXK8sClusterV1beta1ClusterStatusV1beta2ConditionsInner';


/**
 * v1beta2 groups all the fields that will be added or modified in Machine\'s status with the V1Beta2 version.
 */
export interface IoXK8sClusterV1beta1MachineStatusV1beta2 { 
    /**
     * conditions represents the observations of a Machine\'s current state. Known condition types are Available, Ready, UpToDate, BootstrapConfigReady, InfrastructureReady, NodeReady, NodeHealthy, Deleting, Paused. If a MachineHealthCheck is targeting this machine, also HealthCheckSucceeded, OwnerRemediated conditions are added. Additionally control plane Machines controlled by KubeadmControlPlane will have following additional conditions: APIServerPodHealthy, ControllerManagerPodHealthy, SchedulerPodHealthy, EtcdPodHealthy, EtcdMemberHealthy.
     */
    conditions?: Array<IoXK8sClusterV1beta1ClusterStatusV1beta2ConditionsInner>;
}

