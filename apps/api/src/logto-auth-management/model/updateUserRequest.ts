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
import { UpdateUserRequestPrimaryPhone } from './updateUserRequestPrimaryPhone';
import { UpdateUserRequestAvatar } from './updateUserRequestAvatar';
import { UpdateUserRequestName } from './updateUserRequestName';
import { GetJwtCustomizer200ResponseOneOfContextSampleUserProfile } from './getJwtCustomizer200ResponseOneOfContextSampleUserProfile';
import { UpdateUserRequestPrimaryEmail } from './updateUserRequestPrimaryEmail';
import { UpdateUserRequestUsername } from './updateUserRequestUsername';


export interface UpdateUserRequest { 
    username?: UpdateUserRequestUsername | null;
    primaryEmail?: UpdateUserRequestPrimaryEmail | null;
    primaryPhone?: UpdateUserRequestPrimaryPhone | null;
    name?: UpdateUserRequestName | null;
    avatar?: UpdateUserRequestAvatar | null;
    /**
     * Custom data object to update for the given user ID. Note this will replace the entire custom data object.  If you want to perform a partial update, use the `PATCH /api/users/{userId}/custom-data` endpoint instead.
     */
    customData?: object;
    profile?: GetJwtCustomizer200ResponseOneOfContextSampleUserProfile;
}

