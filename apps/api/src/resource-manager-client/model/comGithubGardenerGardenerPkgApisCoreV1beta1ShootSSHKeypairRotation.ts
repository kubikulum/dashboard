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
 * ShootSSHKeypairRotation contains information about the ssh-keypair credential rotation.
 */
export interface ComGithubGardenerGardenerPkgApisCoreV1beta1ShootSSHKeypairRotation { 
    /**
     * LastCompletionTime is the most recent time when the ssh-keypair credential rotation was successfully completed.
     */
    lastCompletionTime?: string;
    /**
     * LastInitiationTime is the most recent time when the ssh-keypair credential rotation was initiated.
     */
    lastInitiationTime?: string;
}

