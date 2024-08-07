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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1LoadBalancerServicesProxyProtocol } from './comGithubGardenerGardenerPkgApisCoreV1beta1LoadBalancerServicesProxyProtocol';


/**
 * SeedSettingLoadBalancerServicesZones controls settings, which are specific to the single-zone load balancers in a multi-zonal setup.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServicesZones { 
    /**
     * Annotations is a map of annotations that will be injected/merged into the zone-specific load balancer service object.
     */
    annotations?: { [key: string]: string; };
    /**
     * ExternalTrafficPolicy describes how nodes distribute service traffic they receive on one of the service\'s \"externally-facing\" addresses. Defaults to \"Cluster\".  Possible enum values:  - `\"Cluster\"`  - `\"Cluster\"` routes traffic to all endpoints.  - `\"Local\"`  - `\"Local\"` preserves the source IP of the traffic by routing only to endpoints on the same node as the traffic was received on (dropping the traffic if there are no local endpoints).
     */
    externalTrafficPolicy?: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServicesZones.ExternalTrafficPolicyEnum;
    /**
     * Name is the name of the zone as specified in seed.spec.provider.zones.
     */
    name: string;
    /**
     * ProxyProtocol controls whether ProxyProtocol is (optionally) allowed for the load balancer services. Defaults to nil, which is equivalent to not allowing ProxyProtocol.
     */
    proxyProtocol?: ComGithubGardenerGardenerPkgApisCoreV1beta1LoadBalancerServicesProxyProtocol;
}
export namespace ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSettingLoadBalancerServicesZones {
    export type ExternalTrafficPolicyEnum = 'Cluster' | 'Cluster' | 'Local' | 'Local';
    export const ExternalTrafficPolicyEnum = {
        Cluster: 'Cluster' as ExternalTrafficPolicyEnum,
        Cluster2: 'Cluster' as ExternalTrafficPolicyEnum,
        Local: 'Local' as ExternalTrafficPolicyEnum,
        Local2: 'Local' as ExternalTrafficPolicyEnum
    };
}


