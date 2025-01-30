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
import { IoXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsInner } from './ioXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsInner';
import { IoXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckMaxUnhealthy } from './ioXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckMaxUnhealthy';
import { IoXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate } from './ioXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate';


/**
 * machineHealthCheck allows to enable, disable and override the MachineHealthCheck configuration in the ClusterClass for this MachineDeployment.
 */
export interface IoXK8sClusterV1beta1ClusterSpecTopologyWorkersMachineDeploymentsInnerMachineHealthCheck { 
    /**
     * enable controls if a MachineHealthCheck should be created for the target machines.  If false: No MachineHealthCheck will be created.  If not set(default): A MachineHealthCheck will be created if it is defined here or  in the associated ClusterClass. If no MachineHealthCheck is defined then none will be created.  If true: A MachineHealthCheck is guaranteed to be created. Cluster validation will block if `enable` is true and no MachineHealthCheck definition is available.
     */
    enable?: boolean;
    maxUnhealthy?: IoXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckMaxUnhealthy;
    /**
     * nodeStartupTimeout allows to set the maximum time for MachineHealthCheck to consider a Machine unhealthy if a corresponding Node isn\'t associated through a `Spec.ProviderID` field.  The duration set in this field is compared to the greatest of: - Cluster\'s infrastructure ready condition timestamp (if and when available) - Control Plane\'s initialized condition timestamp (if and when available) - Machine\'s infrastructure ready condition timestamp (if and when available) - Machine\'s metadata creation timestamp  Defaults to 10 minutes. If you wish to disable this feature, set the value explicitly to 0.
     */
    nodeStartupTimeout?: string;
    remediationTemplate?: IoXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckRemediationTemplate;
    /**
     * unhealthyConditions contains a list of the conditions that determine whether a node is considered unhealthy. The conditions are combined in a logical OR, i.e. if any of the conditions is met, the node is unhealthy.
     */
    unhealthyConditions?: Array<IoXK8sClusterV1beta1ClusterSpecTopologyControlPlaneMachineHealthCheckUnhealthyConditionsInner>;
    /**
     * Any further remediation is only allowed if the number of machines selected by \"selector\" as not healthy is within the range of \"UnhealthyRange\". Takes precedence over MaxUnhealthy. Eg. \"[3-5]\" - This means that remediation will be allowed only when: (a) there are at least 3 unhealthy machines (and) (b) there are at most 5 unhealthy machines
     */
    unhealthyRange?: string;
}

