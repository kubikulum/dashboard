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
import { IoXK8sClusterV1beta1ClusterClassSpecPatchesInnerDefinitionsInnerSelector } from './ioXK8sClusterV1beta1ClusterClassSpecPatchesInnerDefinitionsInnerSelector';
import { IoXK8sClusterV1beta1ClusterClassSpecPatchesInnerDefinitionsInnerJsonPatchesInner } from './ioXK8sClusterV1beta1ClusterClassSpecPatchesInnerDefinitionsInnerJsonPatchesInner';


/**
 * PatchDefinition defines a patch which is applied to customize the referenced templates.
 */
export interface IoXK8sClusterV1beta1ClusterClassSpecPatchesInnerDefinitionsInner { 
    /**
     * jsonPatches defines the patches which should be applied on the templates matching the selector. Note: Patches will be applied in the order of the array.
     */
    jsonPatches: Array<IoXK8sClusterV1beta1ClusterClassSpecPatchesInnerDefinitionsInnerJsonPatchesInner>;
    selector: IoXK8sClusterV1beta1ClusterClassSpecPatchesInnerDefinitionsInnerSelector;
}

