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
import { IoK8sApimachineryPkgApiResourceQuantity } from './ioK8sApimachineryPkgApiResourceQuantity';


/**
 * KubeletConfigEvictionMinimumReclaim contains configuration for the kubelet eviction minimum reclaim.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1KubeletConfigEvictionMinimumReclaim { 
    /**
     * ImageFSAvailable is the threshold for the disk space reclaim in the imagefs filesystem (docker images and container writable layers).
     */
    imageFSAvailable?: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * ImageFSInodesFree is the threshold for the inodes reclaim in the imagefs filesystem.
     */
    imageFSInodesFree?: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * MemoryAvailable is the threshold for the memory reclaim on the host server.
     */
    memoryAvailable?: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * NodeFSAvailable is the threshold for the disk space reclaim in the nodefs filesystem (docker volumes, logs, etc).
     */
    nodeFSAvailable?: IoK8sApimachineryPkgApiResourceQuantity;
    /**
     * NodeFSInodesFree is the threshold for the inodes reclaim in the nodefs filesystem.
     */
    nodeFSInodesFree?: IoK8sApimachineryPkgApiResourceQuantity;
}
