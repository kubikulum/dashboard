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
import { ComGithubGardenerGardenerPkgApisCoreV1beta1KubeControllerManagerConfig } from './comGithubGardenerGardenerPkgApisCoreV1beta1KubeControllerManagerConfig';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1KubeSchedulerConfig } from './comGithubGardenerGardenerPkgApisCoreV1beta1KubeSchedulerConfig';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1KubeletConfig } from './comGithubGardenerGardenerPkgApisCoreV1beta1KubeletConfig';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1ClusterAutoscaler } from './comGithubGardenerGardenerPkgApisCoreV1beta1ClusterAutoscaler';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1KubeProxyConfig } from './comGithubGardenerGardenerPkgApisCoreV1beta1KubeProxyConfig';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1KubeAPIServerConfig } from './comGithubGardenerGardenerPkgApisCoreV1beta1KubeAPIServerConfig';
import { ComGithubGardenerGardenerPkgApisCoreV1beta1VerticalPodAutoscaler } from './comGithubGardenerGardenerPkgApisCoreV1beta1VerticalPodAutoscaler';


/**
 * Kubernetes contains the version and configuration variables for the Shoot control plane.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1Kubernetes { 
    /**
     * ClusterAutoscaler contains the configuration flags for the Kubernetes cluster autoscaler.
     */
    clusterAutoscaler?: ComGithubGardenerGardenerPkgApisCoreV1beta1ClusterAutoscaler;
    /**
     * EnableStaticTokenKubeconfig indicates whether static token kubeconfig secret will be created for the Shoot cluster. Defaults to true for Shoots with Kubernetes versions < 1.26. Defaults to false for Shoots with Kubernetes versions >= 1.26. Starting Kubernetes 1.27 the field will be locked to false.
     */
    enableStaticTokenKubeconfig?: boolean;
    /**
     * KubeAPIServer contains configuration settings for the kube-apiserver.
     */
    kubeAPIServer?: ComGithubGardenerGardenerPkgApisCoreV1beta1KubeAPIServerConfig;
    /**
     * KubeControllerManager contains configuration settings for the kube-controller-manager.
     */
    kubeControllerManager?: ComGithubGardenerGardenerPkgApisCoreV1beta1KubeControllerManagerConfig;
    /**
     * KubeProxy contains configuration settings for the kube-proxy.
     */
    kubeProxy?: ComGithubGardenerGardenerPkgApisCoreV1beta1KubeProxyConfig;
    /**
     * KubeScheduler contains configuration settings for the kube-scheduler.
     */
    kubeScheduler?: ComGithubGardenerGardenerPkgApisCoreV1beta1KubeSchedulerConfig;
    /**
     * Kubelet contains configuration settings for the kubelet.
     */
    kubelet?: ComGithubGardenerGardenerPkgApisCoreV1beta1KubeletConfig;
    /**
     * Version is the semantic Kubernetes version to use for the Shoot cluster. Defaults to the highest supported minor and patch version given in the referenced cloud profile. The version can be omitted completely or partially specified, e.g. `<major>.<minor>`.
     */
    version?: string;
    /**
     * VerticalPodAutoscaler contains the configuration flags for the Kubernetes vertical pod autoscaler.
     */
    verticalPodAutoscaler?: ComGithubGardenerGardenerPkgApisCoreV1beta1VerticalPodAutoscaler;
}

