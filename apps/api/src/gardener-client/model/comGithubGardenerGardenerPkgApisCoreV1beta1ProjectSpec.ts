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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ProjectTolerations } from './comGithubGardenerGardenerPkgApisCoreV1beta1ProjectTolerations';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ProjectMember } from './comGithubGardenerGardenerPkgApisCoreV1beta1ProjectMember';
import { IoK8sApiRbacV1Subject } from './ioK8sApiRbacV1Subject';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1DualApprovalForDeletion } from './comGithubGardenerGardenerPkgApisCoreV1beta1DualApprovalForDeletion';


/**
 * ProjectSpec is the specification of a Project.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ProjectSpec { 
    /**
     * CreatedBy is a subject representing a user name, an email address, or any other identifier of a user who created the project. This field is immutable.
     */
    createdBy?: IoK8sApiRbacV1Subject;
    /**
     * Description is a human-readable description of what the project is used for.
     */
    description?: string;
    /**
     * DualApprovalForDeletion contains configuration for the dual approval concept for resource deletion.
     */
    dualApprovalForDeletion?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1DualApprovalForDeletion>;
    /**
     * Members is a list of subjects representing a user name, an email address, or any other identifier of a user, group, or service account that has a certain role.
     */
    members?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1ProjectMember>;
    /**
     * Namespace is the name of the namespace that has been created for the Project object. A nil value means that Gardener will determine the name of the namespace. This field is immutable.
     */
    namespace?: string;
    /**
     * Owner is a subject representing a user name, an email address, or any other identifier of a user owning the project. IMPORTANT: Be aware that this field will be removed in the `v1` version of this API in favor of the `owner` role. The only way to change the owner will be by moving the `owner` role. In this API version the only way to change the owner is to use this field.
     */
    owner?: IoK8sApiRbacV1Subject;
    /**
     * Purpose is a human-readable explanation of the project\'s purpose.
     */
    purpose?: string;
    /**
     * Tolerations contains the tolerations for taints on seed clusters.
     */
    tolerations?: ComGithubGardenerGardenerPkgApisCoreV1beta1ProjectTolerations;
}

