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
import { CreateConnectorAuthorizationUri200Response } from '../model/createConnectorAuthorizationUri200Response';
import { CreateConnectorAuthorizationUriRequest } from '../model/createConnectorAuthorizationUriRequest';
import { CreateConnectorRequest } from '../model/createConnectorRequest';
import { CreateConnectorTestRequest } from '../model/createConnectorTestRequest';
import { ListConnectors200ResponseInner } from '../model/listConnectors200ResponseInner';
import { UpdateConnectorRequest } from '../model/updateConnectorRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class ConnectorsService {

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
     * Create connector
     * Create a connector with the given data.
     * @param createConnectorRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createConnector(createConnectorRequest: CreateConnectorRequest, ): Observable<AxiosResponse<ListConnectors200ResponseInner>>;
    public createConnector(createConnectorRequest: CreateConnectorRequest, ): Observable<any> {
        if (createConnectorRequest === null || createConnectorRequest === undefined) {
            throw new Error('Required parameter createConnectorRequest was null or undefined when calling createConnector.');
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

                return this.httpClient.post<ListConnectors200ResponseInner>(`${this.basePath}/api/connectors`,
                    createConnectorRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Get connector\&#39;s authorization URI
     * Get authorization URI for specified connector by providing redirect URI and randomly generated state.
     * @param connectorId The unique identifier of the connector.
     * @param createConnectorAuthorizationUriRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createConnectorAuthorizationUri(connectorId: string, createConnectorAuthorizationUriRequest: CreateConnectorAuthorizationUriRequest, ): Observable<AxiosResponse<CreateConnectorAuthorizationUri200Response>>;
    public createConnectorAuthorizationUri(connectorId: string, createConnectorAuthorizationUriRequest: CreateConnectorAuthorizationUriRequest, ): Observable<any> {
        if (connectorId === null || connectorId === undefined) {
            throw new Error('Required parameter connectorId was null or undefined when calling createConnectorAuthorizationUri.');
        }

        if (createConnectorAuthorizationUriRequest === null || createConnectorAuthorizationUriRequest === undefined) {
            throw new Error('Required parameter createConnectorAuthorizationUriRequest was null or undefined when calling createConnectorAuthorizationUri.');
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

                return this.httpClient.post<CreateConnectorAuthorizationUri200Response>(`${this.basePath}/api/connectors/${encodeURIComponent(String(connectorId))}/authorization-uri`,
                    createConnectorAuthorizationUriRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Test passwordless connector
     * Test a passwordless (email or SMS) connector by sending a test message to the given phone number or email address.
     * @param factoryId The unique identifier of the factory.
     * @param createConnectorTestRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createConnectorTest(factoryId: string, createConnectorTestRequest: CreateConnectorTestRequest, ): Observable<AxiosResponse<any>>;
    public createConnectorTest(factoryId: string, createConnectorTestRequest: CreateConnectorTestRequest, ): Observable<any> {
        if (factoryId === null || factoryId === undefined) {
            throw new Error('Required parameter factoryId was null or undefined when calling createConnectorTest.');
        }

        if (createConnectorTestRequest === null || createConnectorTestRequest === undefined) {
            throw new Error('Required parameter createConnectorTestRequest was null or undefined when calling createConnectorTest.');
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

                return this.httpClient.post<any>(`${this.basePath}/api/connectors/${encodeURIComponent(String(factoryId))}/test`,
                    createConnectorTestRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Delete connector
     * Delete connector by ID.
     * @param id The unique identifier of the connector.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteConnector(id: string, ): Observable<AxiosResponse<any>>;
    public deleteConnector(id: string, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteConnector.');
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

                return this.httpClient.delete<any>(`${this.basePath}/api/connectors/${encodeURIComponent(String(id))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Get connector
     * Get connector data by ID
     * @param id The unique identifier of the connector.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getConnector(id: string, ): Observable<AxiosResponse<ListConnectors200ResponseInner>>;
    public getConnector(id: string, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getConnector.');
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

                return this.httpClient.get<ListConnectors200ResponseInner>(`${this.basePath}/api/connectors/${encodeURIComponent(String(id))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Get connectors
     * Get all connectors in the current tenant.
     * @param target Filter connectors by target.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listConnectors(target?: string, ): Observable<AxiosResponse<Array<ListConnectors200ResponseInner>>>;
    public listConnectors(target?: string, ): Observable<any> {
        let queryParameters = new URLSearchParams();
        if (target !== undefined && target !== null) {
            queryParameters.append('target', <any>target);
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

                return this.httpClient.get<Array<ListConnectors200ResponseInner>>(`${this.basePath}/api/connectors`,
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
     * Update connector
     * Update connector by ID with the given data. This methods performs a partial update.
     * @param id The unique identifier of the connector.
     * @param updateConnectorRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateConnector(id: string, updateConnectorRequest: UpdateConnectorRequest, ): Observable<AxiosResponse<ListConnectors200ResponseInner>>;
    public updateConnector(id: string, updateConnectorRequest: UpdateConnectorRequest, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateConnector.');
        }

        if (updateConnectorRequest === null || updateConnectorRequest === undefined) {
            throw new Error('Required parameter updateConnectorRequest was null or undefined when calling updateConnector.');
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

                return this.httpClient.patch<ListConnectors200ResponseInner>(`${this.basePath}/api/connectors/${encodeURIComponent(String(id))}`,
                    updateConnectorRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}