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
import { IoXK8sClusterV1beta1MachineSetSpecSelector } from './ioXK8sClusterV1beta1MachineSetSpecSelector';
import { IoXK8sClusterV1beta1MachineSetSpecTemplate } from './ioXK8sClusterV1beta1MachineSetSpecTemplate';


/**
 * MachineSetSpec defines the desired state of MachineSet.
 */
export interface IoXK8sClusterV1beta1MachineSetSpec { 
    /**
     * clusterName is the name of the Cluster this object belongs to.
     */
    clusterName: string;
    /**
     * deletePolicy defines the policy used to identify nodes to delete when downscaling. Defaults to \"Random\".  Valid values are \"Random, \"Newest\", \"Oldest\"
     */
    deletePolicy?: IoXK8sClusterV1beta1MachineSetSpecDeletePolicy;
    /**
     * minReadySeconds is the minimum number of seconds for which a Node for a newly created machine should be ready before considering the replica available. Defaults to 0 (machine will be considered available as soon as the Node is ready)
     */
    minReadySeconds?: number;
    /**
     * replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified.  Defaults to: * if the Kubernetes autoscaler min size and max size annotations are set:   - if it\'s a new MachineSet, use min size   - if the replicas field of the old MachineSet is < min size, use min size   - if the replicas field of the old MachineSet is > max size, use max size   - if the replicas field of the old MachineSet is in the (min size, max size) range, keep the value from the oldMS * otherwise use 1 Note: Defaulting will be run whenever the replicas field is not set: * A new MachineSet is created with replicas not set. * On an existing MachineSet the replicas field was first set and is now unset. Those cases are especially relevant for the following Kubernetes autoscaler use cases: * A new MachineSet is created and replicas should be managed by the autoscaler * An existing MachineSet which initially wasn\'t controlled by the autoscaler   should be later controlled by the autoscaler
     */
    replicas?: number;
    selector: IoXK8sClusterV1beta1MachineSetSpecSelector;
    template?: IoXK8sClusterV1beta1MachineSetSpecTemplate;
}
export enum IoXK8sClusterV1beta1MachineSetSpecDeletePolicy {
    RANDOM = 'Random',
    NEWEST = 'Newest',
    OLDEST = 'Oldest'
};



