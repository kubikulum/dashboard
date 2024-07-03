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


/**
 * The node this Taint is attached to has the \"effect\" on any pod that does not tolerate the Taint.
 */
export interface IoK8sApiCoreV1Taint { 
    /**
     * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.  Possible enum values:  - `\"NoExecute\"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.  - `\"NoSchedule\"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.  - `\"PreferNoSchedule\"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
     */
    effect: IoK8sApiCoreV1Taint.EffectEnum;
    /**
     * Required. The taint key to be applied to a node.
     */
    key: string;
    /**
     * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
     */
    timeAdded?: string;
    /**
     * The taint value corresponding to the taint key.
     */
    value?: string;
}
export namespace IoK8sApiCoreV1Taint {
    export type EffectEnum = 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule';
    export const EffectEnum = {
        NoExecute: 'NoExecute' as EffectEnum,
        NoSchedule: 'NoSchedule' as EffectEnum,
        PreferNoSchedule: 'PreferNoSchedule' as EffectEnum
    };
}


