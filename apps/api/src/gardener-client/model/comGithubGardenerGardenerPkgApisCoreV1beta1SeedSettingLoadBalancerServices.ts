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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServicesZones } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServicesZones';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1LoadBalancerServicesProxyProtocol } from './comGithubGardenerGardenerPkgApisCoreV1beta1LoadBalancerServicesProxyProtocol';


/**
 * SeedSettingLoadBalancerServices controls certain settings for services of type load balancer that are created in the seed.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServices { 
    /**
     * Annotations is a map of annotations that will be injected/merged into every load balancer service object.
     */
    annotations?: { [key: string]: string; };
    /**
     * ExternalTrafficPolicy describes how nodes distribute service traffic they receive on one of the service\'s \"externally-facing\" addresses. Defaults to \"Cluster\".  Possible enum values:  - `\"Cluster\"`  - `\"Cluster\"` routes traffic to all endpoints.  - `\"Local\"`  - `\"Local\"` preserves the source IP of the traffic by routing only to endpoints on the same node as the traffic was received on (dropping the traffic if there are no local endpoints).
     */
    externalTrafficPolicy?: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServices.ExternalTrafficPolicyEnum;
    /**
     * ProxyProtocol controls whether ProxyProtocol is (optionally) allowed for the load balancer services. Defaults to nil, which is equivalent to not allowing ProxyProtocol.
     */
    proxyProtocol?: ComGithubGardenerGardenerPkgApisCoreV1beta1LoadBalancerServicesProxyProtocol;
    /**
     * Zones controls settings, which are specific to the single-zone load balancers in a multi-zonal setup. Can be empty for single-zone seeds. Each specified zone has to relate to one of the zones in seed.spec.provider.zones.
     */
    zones?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServicesZones>;
}
export namespace ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServices {
    export type ExternalTrafficPolicyEnum = 'Cluster' | 'Cluster' | 'Local' | 'Local';
    export const ExternalTrafficPolicyEnum = {
        Cluster: 'Cluster' as ExternalTrafficPolicyEnum,
        Cluster2: 'Cluster' as ExternalTrafficPolicyEnum,
        Local: 'Local' as ExternalTrafficPolicyEnum,
        Local2: 'Local' as ExternalTrafficPolicyEnum
    };
}


