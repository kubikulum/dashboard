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
 * workers groups all the observations about Cluster\'s Workers current state.
 */
export interface IoXK8sClusterV1beta1ClusterStatusV1beta2Workers { 
    /**
     * availableReplicas is the total number of available worker machines in this cluster. A machine is considered available when Machine\'s Available condition is true.
     */
    availableReplicas?: number;
    /**
     * desiredReplicas is the total number of desired worker machines in this cluster.
     */
    desiredReplicas?: number;
    /**
     * readyReplicas is the total number of ready worker machines in this cluster. A machine is considered ready when Machine\'s Ready condition is true.
     */
    readyReplicas?: number;
    /**
     * replicas is the total number of worker machines in this cluster. NOTE: replicas also includes machines still being provisioned or being deleted.
     */
    replicas?: number;
    /**
     * upToDateReplicas is the number of up-to-date worker machines in this cluster. A machine is considered up-to-date when Machine\'s UpToDate condition is true.
     */
    upToDateReplicas?: number;
}

