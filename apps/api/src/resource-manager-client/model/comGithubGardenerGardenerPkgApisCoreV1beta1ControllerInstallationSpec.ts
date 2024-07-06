/**
 * Gardener
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.98.0-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { IoK8sApiCoreV1ObjectReference } from './ioK8sApiCoreV1ObjectReference';


/**
 * ControllerInstallationSpec is the specification of a ControllerInstallation.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ControllerInstallationSpec { 
    /**
     * DeploymentRef is used to reference a ControllerDeployment resource.
     */
    deploymentRef?: IoK8sApiCoreV1ObjectReference;
    /**
     * RegistrationRef is used to reference a ControllerRegistration resource. The name field of the RegistrationRef is immutable.
     */
    registrationRef: IoK8sApiCoreV1ObjectReference;
    /**
     * SeedRef is used to reference a Seed resource. The name field of the SeedRef is immutable.
     */
    seedRef: IoK8sApiCoreV1ObjectReference;
}
