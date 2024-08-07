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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ControllerRegistrationDeployment } from './comGithubGardenerGardenerPkgApisCoreV1beta1ControllerRegistrationDeployment';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ControllerResource } from './comGithubGardenerGardenerPkgApisCoreV1beta1ControllerResource';


/**
 * ControllerRegistrationSpec is the specification of a ControllerRegistration.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ControllerRegistrationSpec { 
    /**
     * Deployment contains information for how this controller is deployed.
     */
    deployment?: ComGithubGardenerGardenerPkgApisCoreV1beta1ControllerRegistrationDeployment;
    /**
     * Resources is a list of combinations of kinds (DNSProvider, Infrastructure, Generic, ...) and their actual types (aws-route53, gcp, auditlog, ...).
     */
    resources?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1ControllerResource>;
}

