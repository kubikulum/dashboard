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
import { IoXK8sClusterV1beta1MachineDeploymentSpecTemplateSpec } from './ioXK8sClusterV1beta1MachineDeploymentSpecTemplateSpec';
import { IoXK8sClusterV1beta1MachineDeploymentSpecTemplateMetadata } from './ioXK8sClusterV1beta1MachineDeploymentSpecTemplateMetadata';


/**
 * template describes the machines that will be created.
 */
export interface IoXK8sClusterV1beta1MachineDeploymentSpecTemplate { 
    metadata?: IoXK8sClusterV1beta1MachineDeploymentSpecTemplateMetadata;
    spec?: IoXK8sClusterV1beta1MachineDeploymentSpecTemplateSpec;
}

