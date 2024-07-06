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


/**
 * LoadBalancerServicesProxyProtocol controls whether ProxyProtocol is (optionally) allowed for the load balancer services.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1LoadBalancerServicesProxyProtocol { 
    /**
     * Allowed controls whether the ProxyProtocol is optionally allowed for the load balancer services. This should only be enabled if the load balancer services are already using ProxyProtocol or will be reconfigured to use it soon. Until the load balancers are configured with ProxyProtocol, enabling this setting may allow clients to spoof their source IP addresses. The option allows a migration from non-ProxyProtocol to ProxyProtocol without downtime (depending on the infrastructure). Defaults to false.
     */
    allowed: boolean;
}
