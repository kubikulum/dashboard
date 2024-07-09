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
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ShootStateSpec } from './comGithubGardenerGardenerPkgApisCoreV1beta1ShootStateSpec';


/**
 * ShootState contains a snapshot of the Shoot\'s state required to migrate the Shoot\'s control plane to a new Seed.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ShootState { 
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * Standard object metadata.
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * Specification of the ShootState.
     */
    spec?: ComGithubGardenerGardenerPkgApisCoreV1beta1ShootStateSpec;
}

