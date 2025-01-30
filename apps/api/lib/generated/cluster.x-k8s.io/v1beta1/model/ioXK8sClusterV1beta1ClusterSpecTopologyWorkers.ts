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
import { IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachinePoolsInner } from './ioXK8sClusterV1beta1ClusterSpecTopologyWorkersMachinePoolsInner';
import { IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInner } from './ioXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInner';


/**
 * workers encapsulates the different constructs that form the worker nodes for the cluster.
 */
export interface IoXK8sClusterV1beta1ClusterSpecTopologyWorkers { 
    /**
     * machineDeployments is a list of machine deployments in the cluster.
     */
    machineDeployments?: Array<IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInner>;
    /**
     * machinePools is a list of machine pools in the cluster.
     */
    machinePools?: Array<IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachinePoolsInner>;
}

