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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ExposureClass } from './comGithubGardenerGardenerPkgApisCoreV1beta1ExposureClass';
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from './ioK8sApimachineryPkgApisMetaV1ListMeta';


/**
 * ExposureClassList is a collection of ExposureClass.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ExposureClassList { 
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Items is the list of ExposureClasses.
     */
    items: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1ExposureClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * Standard list object metadata.
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
