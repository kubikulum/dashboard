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
/* tslint:disable:no-unused-variable member-ordering */

import { Injectable, Optional } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, from, of, switchMap } from 'rxjs';
import { CreateOrganizationInvitationRequest } from '../model/createOrganizationInvitationRequest';
import { CreateOrganizationInvitationRequestMessagePayloadOneOf } from '../model/createOrganizationInvitationRequestMessagePayloadOneOf';
import { GetOrganizationInvitation200Response } from '../model/getOrganizationInvitation200Response';
import { ReplaceOrganizationInvitationStatusRequest } from '../model/replaceOrganizationInvitationStatusRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';

@Injectable()
export class OrganizationInvitationsService {

    protected basePath = 'http://localhost';
    public defaultHeaders: Record<string,string> = {};
    public configuration = new Configuration();

    constructor(protected httpClient: HttpService, @Optional() configuration: Configuration) {
        this.configuration = configuration || this.configuration;
        this.basePath = configuration?.basePath || this.basePath;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        return consumes.includes(form);
    }

    /**
     * Create organization invitation
     * Create an organization invitation and optionally send it via email. The tenant should have an email connector configured if you want to send the invitation via email at this point.
     * @param createOrganizationInvitationRequest The organization invitation to create.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOrganizationInvitation(createOrganizationInvitationRequest: CreateOrganizationInvitationRequest, ): Observable<AxiosResponse<any>>;
    public createOrganizationInvitation(createOrganizationInvitationRequest: CreateOrganizationInvitationRequest, ): Observable<any> {
        if (createOrganizationInvitationRequest === null || createOrganizationInvitationRequest === undefined) {
            throw new Error('Required parameter createOrganizationInvitationRequest was null or undefined when calling createOrganizationInvitation.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // authentication (ManagementApi) required
        if (typeof this.configuration.accessToken === 'function') {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken()));
        } else if (this.configuration.accessToken) {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken));
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.post<any>(`${this.basePath}/api/organization-invitations`,
                    createOrganizationInvitationRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Resend invitation message
     * Resend the invitation message to the invitee.
     * @param id The unique identifier of the organization invitation.
     * @param createOrganizationInvitationRequestMessagePayloadOneOf The message payload for the \&quot;OrganizationInvitation\&quot; template to use when sending the invitation via email.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOrganizationInvitationMessage(id: string, createOrganizationInvitationRequestMessagePayloadOneOf: CreateOrganizationInvitationRequestMessagePayloadOneOf, ): Observable<AxiosResponse<any>>;
    public createOrganizationInvitationMessage(id: string, createOrganizationInvitationRequestMessagePayloadOneOf: CreateOrganizationInvitationRequestMessagePayloadOneOf, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createOrganizationInvitationMessage.');
        }

        if (createOrganizationInvitationRequestMessagePayloadOneOf === null || createOrganizationInvitationRequestMessagePayloadOneOf === undefined) {
            throw new Error('Required parameter createOrganizationInvitationRequestMessagePayloadOneOf was null or undefined when calling createOrganizationInvitationMessage.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // authentication (ManagementApi) required
        if (typeof this.configuration.accessToken === 'function') {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken()));
        } else if (this.configuration.accessToken) {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken));
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.post<any>(`${this.basePath}/api/organization-invitations/${encodeURIComponent(String(id))}/message`,
                    createOrganizationInvitationRequestMessagePayloadOneOf,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Delete organization invitation
     * Delete an organization invitation by ID.
     * @param id The unique identifier of the organization invitation.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteOrganizationInvitation(id: string, ): Observable<AxiosResponse<any>>;
    public deleteOrganizationInvitation(id: string, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteOrganizationInvitation.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // authentication (ManagementApi) required
        if (typeof this.configuration.accessToken === 'function') {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken()));
        } else if (this.configuration.accessToken) {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken));
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.delete<any>(`${this.basePath}/api/organization-invitations/${encodeURIComponent(String(id))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Get organization invitation
     * Get an organization invitation by ID.
     * @param id The unique identifier of the organization invitation.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOrganizationInvitation(id: string, ): Observable<AxiosResponse<GetOrganizationInvitation200Response>>;
    public getOrganizationInvitation(id: string, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getOrganizationInvitation.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // authentication (ManagementApi) required
        if (typeof this.configuration.accessToken === 'function') {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken()));
        } else if (this.configuration.accessToken) {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken));
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.get<GetOrganizationInvitation200Response>(`${this.basePath}/api/organization-invitations/${encodeURIComponent(String(id))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Get organization invitations
     * Get organization invitations.
     * @param organizationId 
     * @param inviterId 
     * @param invitee 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listOrganizationInvitations(organizationId?: string, inviterId?: string, invitee?: string, ): Observable<AxiosResponse<Array<GetOrganizationInvitation200Response>>>;
    public listOrganizationInvitations(organizationId?: string, inviterId?: string, invitee?: string, ): Observable<any> {
        let queryParameters = new URLSearchParams();
        if (organizationId !== undefined && organizationId !== null) {
            queryParameters.append('organizationId', <any>organizationId);
        }
        if (inviterId !== undefined && inviterId !== null) {
            queryParameters.append('inviterId', <any>inviterId);
        }
        if (invitee !== undefined && invitee !== null) {
            queryParameters.append('invitee', <any>invitee);
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // authentication (ManagementApi) required
        if (typeof this.configuration.accessToken === 'function') {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken()));
        } else if (this.configuration.accessToken) {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken));
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.get<Array<GetOrganizationInvitation200Response>>(`${this.basePath}/api/organization-invitations`,
                    {
                        params: queryParameters,
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update organization invitation status
     * Update the status of an organization invitation by ID.
     * @param id The unique identifier of the organization invitation.
     * @param replaceOrganizationInvitationStatusRequest The organization invitation status to update.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceOrganizationInvitationStatus(id: string, replaceOrganizationInvitationStatusRequest: ReplaceOrganizationInvitationStatusRequest, ): Observable<AxiosResponse<GetOrganizationInvitation200Response>>;
    public replaceOrganizationInvitationStatus(id: string, replaceOrganizationInvitationStatusRequest: ReplaceOrganizationInvitationStatusRequest, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling replaceOrganizationInvitationStatus.');
        }

        if (replaceOrganizationInvitationStatusRequest === null || replaceOrganizationInvitationStatusRequest === undefined) {
            throw new Error('Required parameter replaceOrganizationInvitationStatusRequest was null or undefined when calling replaceOrganizationInvitationStatus.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // authentication (ManagementApi) required
        if (typeof this.configuration.accessToken === 'function') {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken()));
        } else if (this.configuration.accessToken) {
            accessTokenObservable = from(Promise.resolve(this.configuration.accessToken));
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.put<GetOrganizationInvitation200Response>(`${this.basePath}/api/organization-invitations/${encodeURIComponent(String(id))}/status`,
                    replaceOrganizationInvitationStatusRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}
