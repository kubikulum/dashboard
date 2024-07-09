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
 * AuditPolicy contains audit policy for kube-apiserver
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1AuditPolicy { 
    /**
     * ConfigMapRef is a reference to a ConfigMap object in the same namespace, which contains the audit policy for the kube-apiserver.
     */
    configMapRef?: IoK8sApiCoreV1ObjectReference;
}

