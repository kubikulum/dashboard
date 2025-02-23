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
import { IoXK8sClusterV1beta1MachineDeploymentSpecSelectorMatchExpressionsInner } from './ioXK8sClusterV1beta1MachineDeploymentSpecSelectorMatchExpressionsInner';


/**
 * namespaceSelector is a label selector which selects Pods by the labels of their Namespaces. This field follows standard label selector semantics; if not present or empty, it selects Pods of all Namespaces.  If selector is also set, then the selector as a whole selects Pods matching selector in Namespaces selected by namespaceSelector. If selector is not set, it selects all Pods in Namespaces selected by namespaceSelector.
 */
export interface IoXK8sClusterV1beta1MachineDrainRuleSpecPodsInnerNamespaceSelector { 
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    matchExpressions?: Array<IoXK8sClusterV1beta1MachineDeploymentSpecSelectorMatchExpressionsInner>;
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.
     */
    matchLabels?: { [key: string]: string; };
}

