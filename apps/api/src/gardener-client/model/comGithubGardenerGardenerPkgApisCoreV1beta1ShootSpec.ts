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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Extension } from './comGithubGardenerGardenerPkgApisCoreV1beta1Extension';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Kubernetes } from './comGithubGardenerGardenerPkgApisCoreV1beta1Kubernetes';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1CloudProfileReference } from './comGithubGardenerGardenerPkgApisCoreV1beta1CloudProfileReference';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Toleration } from './comGithubGardenerGardenerPkgApisCoreV1beta1Toleration';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Addons } from './comGithubGardenerGardenerPkgApisCoreV1beta1Addons';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1NamedResourceReference } from './comGithubGardenerGardenerPkgApisCoreV1beta1NamedResourceReference';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Provider } from './comGithubGardenerGardenerPkgApisCoreV1beta1Provider';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1DNS } from './comGithubGardenerGardenerPkgApisCoreV1beta1DNS';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Hibernation } from './comGithubGardenerGardenerPkgApisCoreV1beta1Hibernation';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SystemComponents } from './comGithubGardenerGardenerPkgApisCoreV1beta1SystemComponents';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Networking } from './comGithubGardenerGardenerPkgApisCoreV1beta1Networking';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ControlPlane } from './comGithubGardenerGardenerPkgApisCoreV1beta1ControlPlane';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSelector } from './comGithubGardenerGardenerPkgApisCoreV1beta1SeedSelector';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Maintenance } from './comGithubGardenerGardenerPkgApisCoreV1beta1Maintenance';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1Monitoring } from './comGithubGardenerGardenerPkgApisCoreV1beta1Monitoring';


/**
 * ShootSpec is the specification of a Shoot.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ShootSpec { 
    /**
     * Addons contains information about enabled/disabled addons and their configuration.
     */
    addons?: ComGithubGardenerGardenerPkgApisCoreV1beta1Addons;
    /**
     * CloudProfile contains a reference to a CloudProfile or a NamespacedCloudProfile.
     */
    cloudProfile?: ComGithubGardenerGardenerPkgApisCoreV1beta1CloudProfileReference;
    /**
     * CloudProfileName is a name of a CloudProfile object. This field is immutable.
     */
    cloudProfileName: string;
    /**
     * ControlPlane contains general settings for the control plane of the shoot.
     */
    controlPlane?: ComGithubGardenerGardenerPkgApisCoreV1beta1ControlPlane;
    /**
     * CredentialsBindingName is the name of the a CredentialsBinding that has a reference to the provider credentials. The credentials will be used to create the shoot in the respective account. The field is mutually exclusive with SecretBindingName. This field is immutable.
     */
    credentialsBindingName?: string;
    /**
     * DNS contains information about the DNS settings of the Shoot.
     */
    dns?: ComGithubGardenerGardenerPkgApisCoreV1beta1DNS;
    /**
     * ExposureClassName is the optional name of an exposure class to apply a control plane endpoint exposure strategy. This field is immutable.
     */
    exposureClassName?: string;
    /**
     * Extensions contain type and provider information for Shoot extensions.
     */
    extensions?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1Extension>;
    /**
     * Hibernation contains information whether the Shoot is suspended or not.
     */
    hibernation?: ComGithubGardenerGardenerPkgApisCoreV1beta1Hibernation;
    /**
     * Kubernetes contains the version and configuration settings of the control plane components.
     */
    kubernetes: ComGithubGardenerGardenerPkgApisCoreV1beta1Kubernetes;
    /**
     * Maintenance contains information about the time window for maintenance operations and which operations should be performed.
     */
    maintenance?: ComGithubGardenerGardenerPkgApisCoreV1beta1Maintenance;
    /**
     * Monitoring contains information about custom monitoring configurations for the shoot.
     */
    monitoring?: ComGithubGardenerGardenerPkgApisCoreV1beta1Monitoring;
    /**
     * Networking contains information about cluster networking such as CNI Plugin type, CIDRs, ...etc.
     */
    networking?: ComGithubGardenerGardenerPkgApisCoreV1beta1Networking;
    /**
     * Provider contains all provider-specific and provider-relevant information.
     */
    provider: ComGithubGardenerGardenerPkgApisCoreV1beta1Provider;
    /**
     * Purpose is the purpose class for this cluster.
     */
    purpose?: string;
    /**
     * Region is a name of a region. This field is immutable.
     */
    region: string;
    /**
     * Resources holds a list of named resource references that can be referred to in extension configs by their names.
     */
    resources?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1NamedResourceReference>;
    /**
     * SchedulerName is the name of the responsible scheduler which schedules the shoot. If not specified, the default scheduler takes over. This field is immutable.
     */
    schedulerName?: string;
    /**
     * SecretBindingName is the name of the a SecretBinding that has a reference to the provider secret. The credentials inside the provider secret will be used to create the shoot in the respective account. The field is mutually exclusive with CredentialsBindingName. This field is immutable.
     */
    secretBindingName?: string;
    /**
     * SeedName is the name of the seed cluster that runs the control plane of the Shoot.
     */
    seedName?: string;
    /**
     * SeedSelector is an optional selector which must match a seed\'s labels for the shoot to be scheduled on that seed.
     */
    seedSelector?: ComGithubGardenerGardenerPkgApisCoreV1beta1SeedSelector;
    /**
     * SystemComponents contains the settings of system components in the control or data plane of the Shoot cluster.
     */
    systemComponents?: ComGithubGardenerGardenerPkgApisCoreV1beta1SystemComponents;
    /**
     * Tolerations contains the tolerations for taints on seed clusters.
     */
    tolerations?: Array<ComGithubGardenerGardenerPkgApisCoreV1beta1Toleration>;
}
