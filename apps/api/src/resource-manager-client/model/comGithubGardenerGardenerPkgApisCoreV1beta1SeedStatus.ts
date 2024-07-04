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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Condition } from './comGithubGardenerGardenerPkgApisCoreV1beta1Condition';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Gardener } from './comGithubGardenerGardenerPkgApisCoreV1beta1Gardener';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1LastOperation } from './comGithubGardenerGardenerPkgApisCoreV1beta1LastOperation';
import { IoK8sApimachineryPkgApiResourceQuantity } from './ioK8sApimachineryPkgApiResourceQuantity';


/**
 * SeedStatus is the status of a Seed.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedStatus { 
    /**
     * Allocatable represents the resources of a seed that are available for scheduling. Defaults to Capacity.
     */
    allocatable?: { [key: string]: IoK8sApimachineryPkgApiResourceQuantity; };
    /**
     * Capacity represents the total resources of a seed.
     */
    capacity?: { [key: string]: IoK8sApimachineryPkgApiResourceQuantity; };
    /**
     * ClientCertificateExpirationTimestamp is the timestamp at which gardenlet\'s client certificate expires.
     */
    clientCertificateExpirationTimestamp?: string;
    /**
     * ClusterIdentity is the identity of the Seed cluster. This field is immutable.
     */
    clusterIdentity?: string;
    /**
     * Conditions represents the latest available observations of a Seed\'s current state.
     */
    conditions?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1Condition>;
    /**
     * Gardener holds information about the Gardener which last acted on the Shoot.
     */
    gardener?: ComGithubGardenerGardenerPkgApisCoreV1beta1Gardener;
    /**
     * KubernetesVersion is the Kubernetes version of the seed cluster.
     */
    kubernetesVersion?: string;
    /**
     * LastOperation holds information about the last operation on the Seed.
     */
    lastOperation?: ComGithubGardenerGardenerPkgApisCoreV1beta1LastOperation;
    /**
     * ObservedGeneration is the most recent generation observed for this Seed. It corresponds to the Seed\'s generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: number;
}

