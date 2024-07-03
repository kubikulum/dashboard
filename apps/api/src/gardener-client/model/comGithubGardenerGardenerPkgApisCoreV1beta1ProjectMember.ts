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
 * ProjectMember is a member of a project.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ProjectMember { 
    /**
     * APIGroup holds the API group of the referenced subject. Defaults to \"\" for ServiceAccount subjects. Defaults to \"rbac.authorization.k8s.io\" for User and Group subjects.
     */
    apiGroup?: string;
    /**
     * Kind of object being referenced. Values defined by this API group are \"User\", \"Group\", and \"ServiceAccount\". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
     */
    kind: string;
    /**
     * Name of the object being referenced.
     */
    name: string;
    /**
     * Namespace of the referenced object.  If the object kind is non-namespace, such as \"User\" or \"Group\", and this value is not empty the Authorizer should report an error.
     */
    namespace?: string;
    /**
     * Role represents the role of this member. IMPORTANT: Be aware that this field will be removed in the `v1` version of this API in favor of the `roles` list.
     */
    role: string;
    /**
     * Roles represents the list of roles of this member.
     */
    roles?: Array<string>;
}

