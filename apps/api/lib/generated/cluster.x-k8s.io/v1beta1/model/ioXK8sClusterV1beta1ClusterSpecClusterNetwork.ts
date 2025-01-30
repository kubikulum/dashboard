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
import { IoXK8sClusterV1beta1ClusterSpecClusterNetworkPods } from './ioXK8sClusterV1beta1ClusterSpecClusterNetworkPods';
import { IoXK8sClusterV1beta1ClusterSpecClusterNetworkServices } from './ioXK8sClusterV1beta1ClusterSpecClusterNetworkServices';


/**
 * Cluster network configuration.
 */
export interface IoXK8sClusterV1beta1ClusterSpecClusterNetwork { 
    /**
     * apiServerPort specifies the port the API Server should bind to. Defaults to 6443.
     */
    apiServerPort?: number;
    pods?: IoXK8sClusterV1beta1ClusterSpecClusterNetworkPods;
    /**
     * Domain name for services.
     */
    serviceDomain?: string;
    services?: IoXK8sClusterV1beta1ClusterSpecClusterNetworkServices;
}

