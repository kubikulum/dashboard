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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1AvailabilityZone } from './comGithubGardenerGardenerPkgApisCoreV1beta1AvailabilityZone';


/**
 * Region contains certain properties of a region.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1Region { 
    /**
     * Labels is an optional set of key-value pairs that contain certain administrator-controlled labels for this region. It can be used by Gardener administrators/operators to provide additional information about a region, e.g. wrt quality, reliability, access restrictions, etc.
     */
    labels?: { [key: string]: string; };
    /**
     * Name is a region name.
     */
    name: string;
    /**
     * Zones is a list of availability zones in this region.
     */
    zones?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1AvailabilityZone>;
}

