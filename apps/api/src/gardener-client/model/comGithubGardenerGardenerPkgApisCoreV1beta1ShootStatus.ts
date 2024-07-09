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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1LastError } from './comGithubGardenerGardenerPkgApisCoreV1beta1LastError';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ShootCredentials } from './comGithubGardenerGardenerPkgApisCoreV1beta1ShootCredentials';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ShootAdvertisedAddress } from './comGithubGardenerGardenerPkgApisCoreV1beta1ShootAdvertisedAddress';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1LastMaintenance } from './comGithubGardenerGardenerPkgApisCoreV1beta1LastMaintenance';


/**
 * ShootStatus holds the most recently observed status of the Shoot cluster.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ShootStatus { 
    /**
     * List of addresses that are relevant to the shoot. These include the Kube API server address and also the service account issuer.
     */
    advertisedAddresses?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1ShootAdvertisedAddress>;
    /**
     * ClusterIdentity is the identity of the Shoot cluster. This field is immutable.
     */
    clusterIdentity?: string;
    /**
     * Conditions represents the latest available observations of a Shoots\'s current state.
     */
    conditions?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1Condition>;
    /**
     * Constraints represents conditions of a Shoot\'s current state that constraint some operations on it.
     */
    constraints?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1Condition>;
    /**
     * Credentials contains information about the shoot credentials.
     */
    credentials?: ComGithubGardenerGardenerPkgApisCoreV1beta1ShootCredentials;
    /**
     * EncryptedResources is the list of resources in the Shoot which are currently encrypted. Secrets are encrypted by default and are not part of the list. See https://github.com/gardener/gardener/blob/master/docs/usage/etcd_encryption_config.md for more details.
     */
    encryptedResources?: Array<string>;
    /**
     * Gardener holds information about the Gardener which last acted on the Shoot.
     */
    gardener: ComGithubGardenerGardenerPkgApisCoreV1beta1Gardener;
    /**
     * IsHibernated indicates whether the Shoot is currently hibernated.
     */
    hibernated: boolean;
    /**
     * LastErrors holds information about the last occurred error(s) during an operation.
     */
    lastErrors?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1LastError>;
    /**
     * LastHibernationTriggerTime indicates the last time when the hibernation controller managed to change the hibernation settings of the cluster
     */
    lastHibernationTriggerTime?: string;
    /**
     * LastMaintenance holds information about the last maintenance operations on the Shoot.
     */
    lastMaintenance?: ComGithubGardenerGardenerPkgApisCoreV1beta1LastMaintenance;
    /**
     * LastOperation holds information about the last operation on the Shoot.
     */
    lastOperation?: ComGithubGardenerGardenerPkgApisCoreV1beta1LastOperation;
    /**
     * MigrationStartTime is the time when a migration to a different seed was initiated.
     */
    migrationStartTime?: string;
    /**
     * ObservedGeneration is the most recent generation observed for this Shoot. It corresponds to the Shoot\'s generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: number;
    /**
     * RetryCycleStartTime is the start time of the last retry cycle (used to determine how often an operation must be retried until we give up).
     */
    retryCycleStartTime?: string;
    /**
     * SeedName is the name of the seed cluster that runs the control plane of the Shoot. This value is only written after a successful create/reconcile operation. It will be used when control planes are moved between Seeds.
     */
    seedName?: string;
    /**
     * TechnicalID is the name that is used for creating the Seed namespace, the infrastructure resources, and basically everything that is related to this particular Shoot. This field is immutable.
     */
    technicalID: string;
    /**
     * UID is a unique identifier for the Shoot cluster to avoid portability between Kubernetes clusters. It is used to compute unique hashes. This field is immutable.
     */
    uid: string;
}

