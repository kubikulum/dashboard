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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedTaint } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedTaint';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedProvider } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedProvider';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedNetworks } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedNetworks';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedBackup } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedBackup';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedDNS } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedDNS';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettings } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedSettings';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedVolume } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedVolume';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Ingress } from './comGithubGardenerGardenerPkgApisCoreV1beta1Ingress';


/**
 * SeedSpec is the specification of a Seed.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSpec { 
    /**
     * Backup holds the object store configuration for the backups of shoot (currently only etcd). If it is not specified, then there won\'t be any backups taken for shoots associated with this seed. If backup field is present in seed, then backups of the etcd from shoot control plane will be stored under the configured object store.
     */
    backup?: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedBackup;
    /**
     * DNS contains DNS-relevant information about this seed cluster.
     */
    dns: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedDNS;
    /**
     * Ingress configures Ingress specific settings of the Seed cluster. This field is immutable.
     */
    ingress?: ComGithubGardenerGardenerPkgApisCoreV1beta1Ingress;
    /**
     * Networks defines the pod, service and worker network of the Seed cluster.
     */
    networks: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedNetworks;
    /**
     * Provider defines the provider type and region for this Seed cluster.
     */
    provider: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedProvider;
    /**
     * Settings contains certain settings for this seed cluster.
     */
    settings?: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettings;
    /**
     * Taints describes taints on the seed.
     */
    taints?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1SeedTaint>;
    /**
     * Volume contains settings for persistentvolumes created in the seed cluster.
     */
    volume?: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedVolume;
}

