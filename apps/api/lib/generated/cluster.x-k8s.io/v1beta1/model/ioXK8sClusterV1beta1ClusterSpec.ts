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
import { IoXK8sClusterV1beta1ClusterSpecControlPlaneRef } from './ioXK8sClusterV1beta1ClusterSpecControlPlaneRef';
import { IoXK8sClusterV1beta1ClusterSpecAvailabilityGatesInner } from './ioXK8sClusterV1beta1ClusterSpecAvailabilityGatesInner';
import { IoXK8sClusterV1beta1ClusterSpecTopology } from './ioXK8sClusterV1beta1ClusterSpecTopology';
import { IoXK8sClusterV1beta1ClusterSpecInfrastructureRef } from './ioXK8sClusterV1beta1ClusterSpecInfrastructureRef';
import { IoXK8sClusterV1beta1ClusterSpecClusterNetwork } from './ioXK8sClusterV1beta1ClusterSpecClusterNetwork';
import { IoXK8sClusterV1beta1ClusterSpecControlPlaneEndpoint } from './ioXK8sClusterV1beta1ClusterSpecControlPlaneEndpoint';


/**
 * ClusterSpec defines the desired state of Cluster.
 */
export interface IoXK8sClusterV1beta1ClusterSpec { 
    /**
     * availabilityGates specifies additional conditions to include when evaluating Cluster Available condition.  NOTE: this field is considered only for computing v1beta2 conditions.
     */
    availabilityGates?: Array<IoXK8sClusterV1beta1ClusterSpecAvailabilityGatesInner>;
    clusterNetwork?: IoXK8sClusterV1beta1ClusterSpecClusterNetwork;
    controlPlaneEndpoint?: IoXK8sClusterV1beta1ClusterSpecControlPlaneEndpoint;
    controlPlaneRef?: IoXK8sClusterV1beta1ClusterSpecControlPlaneRef;
    infrastructureRef?: IoXK8sClusterV1beta1ClusterSpecInfrastructureRef;
    /**
     * paused can be used to prevent controllers from processing the Cluster and all its associated objects.
     */
    paused?: boolean;
    topology?: IoXK8sClusterV1beta1ClusterSpecTopology;
}

