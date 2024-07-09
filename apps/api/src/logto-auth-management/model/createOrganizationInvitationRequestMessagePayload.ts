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
import { CreateOrganizationInvitationRequestMessagePayloadOneOf } from './createOrganizationInvitationRequestMessagePayloadOneOf';


/**
 * The message payload for the \"OrganizationInvitation\" template to use when sending the invitation via email. If it is `false`, the invitation will not be sent via email.
 */
/**
 * @type CreateOrganizationInvitationRequestMessagePayload
 * The message payload for the \"OrganizationInvitation\" template to use when sending the invitation via email. If it is `false`, the invitation will not be sent via email.
 * @export
 */
export type CreateOrganizationInvitationRequestMessagePayload = CreateOrganizationInvitationRequestMessagePayloadOneOf | boolean;
