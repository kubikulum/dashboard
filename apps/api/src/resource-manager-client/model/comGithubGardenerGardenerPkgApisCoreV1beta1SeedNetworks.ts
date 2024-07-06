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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ShootNetworks } from './comGithubGardenerGardenerPkgApisCoreV1beta1ShootNetworks';


/**
 * SeedNetworks contains CIDRs for the pod, service and node networks of a Kubernetes cluster.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedNetworks { 
    /**
     * BlockCIDRs is a list of network addresses that should be blocked for shoot control plane components running in the seed cluster.
     */
    blockCIDRs?: Array<string>;
    /**
     * IPFamilies specifies the IP protocol versions to use for seed networking. This field is immutable. See https://github.com/gardener/gardener/blob/master/docs/usage/ipv6.md. Defaults to [\"IPv4\"].
     */
    ipFamilies?: Array<string>;
    /**
     * Nodes is the CIDR of the node network. This field is immutable.
     */
    nodes?: string;
    /**
     * Pods is the CIDR of the pod network. This field is immutable.
     */
    pods: string;
    /**
     * Services is the CIDR of the service network. This field is immutable.
     */
    services: string;
    /**
     * ShootDefaults contains the default networks CIDRs for shoots.
     */
    shootDefaults?: ComGithubGardenerGardenerPkgApisCoreV1beta1ShootNetworks;
}
