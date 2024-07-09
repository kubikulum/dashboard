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
import { ApiInteractionVerificationVerificationCodePostRequest } from '../model/apiInteractionVerificationVerificationCodePostRequest';
import { VerifyVerificationCodeRequest } from '../model/verifyVerificationCodeRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class VerificationCodesService {

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
     * Request and send a verification code
     * Request a verification code for the provided identifier (email/phone). if you\&#39;re using email as the identifier, you need to setup your email connector first. if you\&#39;re using phone as the identifier, you need to setup your SMS connector first.
     * @param apiInteractionVerificationVerificationCodePostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createVerificationCode(apiInteractionVerificationVerificationCodePostRequest: ApiInteractionVerificationVerificationCodePostRequest, ): Observable<AxiosResponse<any>>;
    public createVerificationCode(apiInteractionVerificationVerificationCodePostRequest: ApiInteractionVerificationVerificationCodePostRequest, ): Observable<any> {
        if (apiInteractionVerificationVerificationCodePostRequest === null || apiInteractionVerificationVerificationCodePostRequest === undefined) {
            throw new Error('Required parameter apiInteractionVerificationVerificationCodePostRequest was null or undefined when calling createVerificationCode.');
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

                return this.httpClient.post<any>(`${this.basePath}/api/verification-codes`,
                    apiInteractionVerificationVerificationCodePostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Verify a verification code
     * Verify a verification code for a specified identifier. if you\&#39;re using email as the identifier, you need to setup your email connector first. if you\&#39;re using phone as the identifier, you need to setup your SMS connector first.
     * @param verifyVerificationCodeRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public verifyVerificationCode(verifyVerificationCodeRequest: VerifyVerificationCodeRequest, ): Observable<AxiosResponse<any>>;
    public verifyVerificationCode(verifyVerificationCodeRequest: VerifyVerificationCodeRequest, ): Observable<any> {
        if (verifyVerificationCodeRequest === null || verifyVerificationCodeRequest === undefined) {
            throw new Error('Required parameter verifyVerificationCodeRequest was null or undefined when calling verifyVerificationCode.');
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

                return this.httpClient.post<any>(`${this.basePath}/api/verification-codes/verify`,
                    verifyVerificationCodeRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}
