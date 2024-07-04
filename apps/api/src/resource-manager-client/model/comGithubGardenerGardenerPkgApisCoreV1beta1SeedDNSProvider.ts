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
import { IoK8sApiCoreV1SecretReference } from './ioK8sApiCoreV1SecretReference';


/**
 * SeedDNSProvider configures a DNSProvider for Seeds
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1SeedDNSProvider { 
    /**
     * SecretRef is a reference to a Secret object containing cloud provider credentials used for registering external domains.
     */
    secretRef: IoK8sApiCoreV1SecretReference;
    /**
     * Type describes the type of the dns-provider, for example `aws-route53`
     */
    type: string;
}

