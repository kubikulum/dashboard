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
import { IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdateMaxUnavailable } from './ioXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdateMaxUnavailable';
import { IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdateMaxSurge } from './ioXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdateMaxSurge';


/**
 * Rolling update config params. Present only if MachineDeploymentStrategyType = RollingUpdate.
 */
export interface IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdate { 
    /**
     * deletePolicy defines the policy used by the MachineDeployment to identify nodes to delete when downscaling. Valid values are \"Random, \"Newest\", \"Oldest\" When no value is supplied, the default DeletePolicy of MachineSet is used
     */
    deletePolicy?: IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdateDeletePolicy;
    maxSurge?: IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdateMaxSurge;
    maxUnavailable?: IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdateMaxUnavailable;
}
export enum IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerStrategyRollingUpdateDeletePolicy {
    RANDOM = 'Random',
    NEWEST = 'Newest',
    OLDEST = 'Oldest'
};



