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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1LastOperation } from './comGithubGardenerGardenerPkgApisCoreV1beta1LastOperation';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1LastError } from './comGithubGardenerGardenerPkgApisCoreV1beta1LastError';


/**
 * BackupEntryStatus holds the most recently observed status of the Backup Entry.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1BackupEntryStatus { 
    /**
     * LastError holds information about the last occurred error during an operation.
     */
    lastError?: ComGithubGardenerGardenerPkgApisCoreV1beta1LastError;
    /**
     * LastOperation holds information about the last operation on the BackupEntry.
     */
    lastOperation?: ComGithubGardenerGardenerPkgApisCoreV1beta1LastOperation;
    /**
     * MigrationStartTime is the time when a migration to a different seed was initiated.
     */
    migrationStartTime?: string;
    /**
     * ObservedGeneration is the most recent generation observed for this BackupEntry. It corresponds to the BackupEntry\'s generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: number;
    /**
     * SeedName is the name of the seed to which this BackupEntry is currently scheduled. This field is populated at the beginning of a create/reconcile operation. It is used when moving the BackupEntry between seeds.
     */
    seedName?: string;
}
