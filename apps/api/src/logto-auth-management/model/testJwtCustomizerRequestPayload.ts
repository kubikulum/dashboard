/**
 * Logto API references
 * API references for Logto services.  Note: The documentation is for Logto Cloud. If you are using Logto OSS, please refer to the response of `/api/swagger.json` endpoint on your Logto instance.
 *
 * The version of the OpenAPI document: Cloud
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface TestJwtCustomizerRequestPayload { 
    /**
     * The code snippet of the JWT customizer.
     */
    script?: any | null;
    /**
     * The environment variables for the JWT customizer.
     */
    environmentVariables?: any | null;
    /**
     * The sample context for the JWT customizer script testing purpose.
     */
    contextSample?: any | null;
    /**
     * The sample token payload for the JWT customizer script testing purpose.
     */
    tokenSample?: any | null;
}

