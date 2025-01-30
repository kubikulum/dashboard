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
import { IoXK8sClusterV1beta1MachineSpecInfrastructureRef } from './ioXK8sClusterV1beta1MachineSpecInfrastructureRef';
import { IoXK8sClusterV1beta1MachineSpecBootstrap } from './ioXK8sClusterV1beta1MachineSpecBootstrap';
import { IoXK8sClusterV1beta1MachineSpecReadinessGatesInner } from './ioXK8sClusterV1beta1MachineSpecReadinessGatesInner';


/**
 * Specification of the desired behavior of the machine. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
export interface IoXK8sClusterV1beta1MachineDeploymentSpecTemplateSpec { 
    bootstrap: IoXK8sClusterV1beta1MachineSpecBootstrap;
    /**
     * clusterName is the name of the Cluster this object belongs to.
     */
    clusterName: string;
    /**
     * failureDomain is the failure domain the machine will be created in. Must match a key in the FailureDomains map stored on the cluster object.
     */
    failureDomain?: string;
    infrastructureRef: IoXK8sClusterV1beta1MachineSpecInfrastructureRef;
    /**
     * nodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely. Defaults to 10 seconds.
     */
    nodeDeletionTimeout?: string;
    /**
     * nodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from `kubectl drain --timeout`
     */
    nodeDrainTimeout?: string;
    /**
     * nodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
     */
    nodeVolumeDetachTimeout?: string;
    /**
     * providerID is the identification ID of the machine provided by the provider. This field must match the provider ID as seen on the node object corresponding to this machine. This field is required by higher level consumers of cluster-api. Example use case is cluster autoscaler with cluster-api as provider. Clean-up logic in the autoscaler compares machines to nodes to find out machines at provider which could not get registered as Kubernetes nodes. With cluster-api as a generic out-of-tree provider for autoscaler, this field is required by autoscaler to be able to have a provider view of the list of machines. Another list of nodes is queried from the k8s apiserver and then a comparison is done to find out unregistered machines and are marked for delete. This field will be set by the actuators and consumed by higher level entities like autoscaler that will be interfacing with cluster-api as generic provider.
     */
    providerID?: string;
    /**
     * readinessGates specifies additional conditions to include when evaluating Machine Ready condition.  This field can be used e.g. by Cluster API control plane providers to extend the semantic of the Ready condition for the Machine they control, like the kubeadm control provider adding ReadinessGates for the APIServerPodHealthy, SchedulerPodHealthy conditions, etc.  Another example are external controllers, e.g. responsible to install special software/hardware on the Machines; they can include the status of those components with a new condition and add this condition to ReadinessGates.  NOTE: This field is considered only for computing v1beta2 conditions. NOTE: In case readinessGates conditions start with the APIServer, ControllerManager, Scheduler prefix, and all those readiness gates condition are reporting the same message, when computing the Machine\'s Ready condition those readinessGates will be replaced by a single entry reporting \"Control plane components: \" + message. This helps to improve readability of conditions bubbling up to the Machine\'s owner resource / to the Cluster).
     */
    readinessGates?: Array<IoXK8sClusterV1beta1MachineSpecReadinessGatesInner>;
    /**
     * version defines the desired Kubernetes version. This field is meant to be optionally used by bootstrap providers.
     */
    version?: string;
}

