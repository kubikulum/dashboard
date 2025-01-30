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
 * FailureDomainSpec is the Schema for Cluster API failure domains. It allows controllers to understand how many failure domains a cluster can optionally span across.
 */
export interface IoXK8sClusterV1beta1ClusterStatusFailureDomainsValue { 
    /**
     * attributes is a free form map of attributes an infrastructure provider might use or require.
     */
    attributes?: { [key: string]: string; };
    /**
     * controlPlane determines if this failure domain is suitable for use by control plane machines.
     */
    controlPlane?: boolean;
}

