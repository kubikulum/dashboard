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
import { GetSignInExp200Response } from '../model/getSignInExp200Response';
import { UpdateSignInExp200Response } from '../model/updateSignInExp200Response';
import { UpdateSignInExpRequest } from '../model/updateSignInExpRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class SignInExperienceService {

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
     * Get default sign-in experience settings
     * Get the default sign-in experience settings.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSignInExp(): Observable<AxiosResponse<GetSignInExp200Response>>;
    public getSignInExp(): Observable<any> {
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

                return this.httpClient.get<GetSignInExp200Response>(`${this.basePath}/api/sign-in-exp`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update default sign-in experience settings
     * Update the default sign-in experience settings with the provided data.
     * @param updateSignInExpRequest 
     * @param removeUnusedDemoSocialConnector Whether to remove unused demo social connectors. (These demo social connectors are only used during cloud user onboarding)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSignInExp(updateSignInExpRequest: UpdateSignInExpRequest, removeUnusedDemoSocialConnector?: string, ): Observable<AxiosResponse<UpdateSignInExp200Response>>;
    public updateSignInExp(updateSignInExpRequest: UpdateSignInExpRequest, removeUnusedDemoSocialConnector?: string, ): Observable<any> {
        if (updateSignInExpRequest === null || updateSignInExpRequest === undefined) {
            throw new Error('Required parameter updateSignInExpRequest was null or undefined when calling updateSignInExp.');
        }

        let queryParameters = new URLSearchParams();
        if (removeUnusedDemoSocialConnector !== undefined && removeUnusedDemoSocialConnector !== null) {
            queryParameters.append('removeUnusedDemoSocialConnector', <any>removeUnusedDemoSocialConnector);
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

                return this.httpClient.patch<UpdateSignInExp200Response>(`${this.basePath}/api/sign-in-exp`,
                    updateSignInExpRequest,
                    {
                        params: queryParameters,
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}
