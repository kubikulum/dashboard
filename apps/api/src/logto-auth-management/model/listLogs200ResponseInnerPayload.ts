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
import { ListLogs200ResponseInnerPayloadError } from './listLogs200ResponseInnerPayloadError';


export interface ListLogs200ResponseInnerPayload { 
    key: string;
    result: ListLogs200ResponseInnerPayload.ResultEnum;
    error?: ListLogs200ResponseInnerPayloadError;
    ip?: string;
    userAgent?: string;
    userId?: string;
    applicationId?: string;
    sessionId?: string;
}
export namespace ListLogs200ResponseInnerPayload {
    export type ResultEnum = 'Success' | 'Error';
    export const ResultEnum = {
        Success: 'Success' as ResultEnum,
        Error: 'Error' as ResultEnum
    };
}


