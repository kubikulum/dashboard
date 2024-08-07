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
import { CreateOrganizationRoleRequest } from '../model/createOrganizationRoleRequest';
import { CreateOrganizationRoleResourceScopeRequest } from '../model/createOrganizationRoleResourceScopeRequest';
import { CreateOrganizationRoleScopeRequest } from '../model/createOrganizationRoleScopeRequest';
import { GetOrganizationRole200Response } from '../model/getOrganizationRole200Response';
import { ListOrganizationRoleScopes200ResponseInner } from '../model/listOrganizationRoleScopes200ResponseInner';
import { ListOrganizationRoles200ResponseInner } from '../model/listOrganizationRoles200ResponseInner';
import { ListResources200ResponseInnerScopesInner } from '../model/listResources200ResponseInnerScopesInner';
import { ReplaceOrganizationRoleResourceScopesRequest } from '../model/replaceOrganizationRoleResourceScopesRequest';
import { ReplaceOrganizationRoleScopesRequest } from '../model/replaceOrganizationRoleScopesRequest';
import { UpdateOrganizationRoleRequest } from '../model/updateOrganizationRoleRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class OrganizationRolesService {

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
     * Create an organization role
     * Create a new organization role with the given data.
     * @param createOrganizationRoleRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOrganizationRole(createOrganizationRoleRequest: CreateOrganizationRoleRequest, ): Observable<AxiosResponse<any>>;
    public createOrganizationRole(createOrganizationRoleRequest: CreateOrganizationRoleRequest, ): Observable<any> {
        if (createOrganizationRoleRequest === null || createOrganizationRoleRequest === undefined) {
            throw new Error('Required parameter createOrganizationRoleRequest was null or undefined when calling createOrganizationRole.');
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

                return this.httpClient.post<any>(`${this.basePath}/api/organization-roles`,
                    createOrganizationRoleRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Assign resource scopes to organization role
     * Assign resource scopes to the specified organization role
     * @param id The unique identifier of the organization role.
     * @param createOrganizationRoleResourceScopeRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOrganizationRoleResourceScope(id: string, createOrganizationRoleResourceScopeRequest: CreateOrganizationRoleResourceScopeRequest, ): Observable<AxiosResponse<any>>;
    public createOrganizationRoleResourceScope(id: string, createOrganizationRoleResourceScopeRequest: CreateOrganizationRoleResourceScopeRequest, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createOrganizationRoleResourceScope.');
        }

        if (createOrganizationRoleResourceScopeRequest === null || createOrganizationRoleResourceScopeRequest === undefined) {
            throw new Error('Required parameter createOrganizationRoleResourceScopeRequest was null or undefined when calling createOrganizationRoleResourceScope.');
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

                return this.httpClient.post<any>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}/resource-scopes`,
                    createOrganizationRoleResourceScopeRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Assign organization scopes to organization role
     * Assign organization scopes to the specified organization role
     * @param id The unique identifier of the organization role.
     * @param createOrganizationRoleScopeRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOrganizationRoleScope(id: string, createOrganizationRoleScopeRequest: CreateOrganizationRoleScopeRequest, ): Observable<AxiosResponse<any>>;
    public createOrganizationRoleScope(id: string, createOrganizationRoleScopeRequest: CreateOrganizationRoleScopeRequest, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createOrganizationRoleScope.');
        }

        if (createOrganizationRoleScopeRequest === null || createOrganizationRoleScopeRequest === undefined) {
            throw new Error('Required parameter createOrganizationRoleScopeRequest was null or undefined when calling createOrganizationRoleScope.');
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

                return this.httpClient.post<any>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}/scopes`,
                    createOrganizationRoleScopeRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Delete organization role
     * Delete organization role by ID.
     * @param id The unique identifier of the organization role.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteOrganizationRole(id: string, ): Observable<AxiosResponse<any>>;
    public deleteOrganizationRole(id: string, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteOrganizationRole.');
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

                return this.httpClient.delete<any>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Remove resource scope
     * Remove a resource scope assignment from the specified organization role.
     * @param id The unique identifier of the organization role.
     * @param scopeId The unique identifier of the scope.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteOrganizationRoleResourceScope(id: string, scopeId: string, ): Observable<AxiosResponse<any>>;
    public deleteOrganizationRoleResourceScope(id: string, scopeId: string, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteOrganizationRoleResourceScope.');
        }

        if (scopeId === null || scopeId === undefined) {
            throw new Error('Required parameter scopeId was null or undefined when calling deleteOrganizationRoleResourceScope.');
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

                return this.httpClient.delete<any>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}/resource-scopes/${encodeURIComponent(String(scopeId))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Remove organization scope
     * Remove a organization scope assignment from the specified organization role.
     * @param id The unique identifier of the organization role.
     * @param organizationScopeId The unique identifier of the organization scope.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteOrganizationRoleScope(id: string, organizationScopeId: string, ): Observable<AxiosResponse<any>>;
    public deleteOrganizationRoleScope(id: string, organizationScopeId: string, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteOrganizationRoleScope.');
        }

        if (organizationScopeId === null || organizationScopeId === undefined) {
            throw new Error('Required parameter organizationScopeId was null or undefined when calling deleteOrganizationRoleScope.');
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

                return this.httpClient.delete<any>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}/scopes/${encodeURIComponent(String(organizationScopeId))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Get organization role
     * Get organization role details by ID.
     * @param id The unique identifier of the organization role.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOrganizationRole(id: string, ): Observable<AxiosResponse<GetOrganizationRole200Response>>;
    public getOrganizationRole(id: string, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getOrganizationRole.');
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

                return this.httpClient.get<GetOrganizationRole200Response>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Get organization role resource scopes
     * Get all resource scopes that are assigned to the specified organization role.
     * @param id The unique identifier of the organization role.
     * @param page Page number (starts from 1).
     * @param pageSize Entries per page.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listOrganizationRoleResourceScopes(id: string, page?: number, pageSize?: number, ): Observable<AxiosResponse<Array<ListResources200ResponseInnerScopesInner>>>;
    public listOrganizationRoleResourceScopes(id: string, page?: number, pageSize?: number, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listOrganizationRoleResourceScopes.');
        }

        let queryParameters = new URLSearchParams();
        if (page !== undefined && page !== null) {
            queryParameters.append('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters.append('page_size', <any>pageSize);
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

                return this.httpClient.get<Array<ListResources200ResponseInnerScopesInner>>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}/resource-scopes`,
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
     * Get organization role scopes
     * Get all organization scopes that are assigned to the specified organization role.
     * @param id The unique identifier of the organization role.
     * @param page Page number (starts from 1).
     * @param pageSize Entries per page.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listOrganizationRoleScopes(id: string, page?: number, pageSize?: number, ): Observable<AxiosResponse<Array<ListOrganizationRoleScopes200ResponseInner>>>;
    public listOrganizationRoleScopes(id: string, page?: number, pageSize?: number, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listOrganizationRoleScopes.');
        }

        let queryParameters = new URLSearchParams();
        if (page !== undefined && page !== null) {
            queryParameters.append('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters.append('page_size', <any>pageSize);
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

                return this.httpClient.get<Array<ListOrganizationRoleScopes200ResponseInner>>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}/scopes`,
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
     * Get organization roles
     * Get organization roles with pagination.
     * @param q 
     * @param page Page number (starts from 1).
     * @param pageSize Entries per page.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listOrganizationRoles(q?: string, page?: number, pageSize?: number, ): Observable<AxiosResponse<Array<ListOrganizationRoles200ResponseInner>>>;
    public listOrganizationRoles(q?: string, page?: number, pageSize?: number, ): Observable<any> {
        let queryParameters = new URLSearchParams();
        if (q !== undefined && q !== null) {
            queryParameters.append('q', <any>q);
        }
        if (page !== undefined && page !== null) {
            queryParameters.append('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters.append('page_size', <any>pageSize);
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

                return this.httpClient.get<Array<ListOrganizationRoles200ResponseInner>>(`${this.basePath}/api/organization-roles`,
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
     * Replace resource scopes for organization role
     * Replace all resource scopes that are assigned to the specified organization role with the given resource scopes. This effectively removes all existing organization scope assignments and replaces them with the new ones.
     * @param id The unique identifier of the organization role.
     * @param replaceOrganizationRoleResourceScopesRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceOrganizationRoleResourceScopes(id: string, replaceOrganizationRoleResourceScopesRequest: ReplaceOrganizationRoleResourceScopesRequest, ): Observable<AxiosResponse<any>>;
    public replaceOrganizationRoleResourceScopes(id: string, replaceOrganizationRoleResourceScopesRequest: ReplaceOrganizationRoleResourceScopesRequest, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling replaceOrganizationRoleResourceScopes.');
        }

        if (replaceOrganizationRoleResourceScopesRequest === null || replaceOrganizationRoleResourceScopesRequest === undefined) {
            throw new Error('Required parameter replaceOrganizationRoleResourceScopesRequest was null or undefined when calling replaceOrganizationRoleResourceScopes.');
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

                return this.httpClient.put<any>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}/resource-scopes`,
                    replaceOrganizationRoleResourceScopesRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Replace organization scopes for organization role
     * Replace all organization scopes that are assigned to the specified organization role with the given organization scopes. This effectively removes all existing organization scope assignments and replaces them with the new ones.
     * @param id The unique identifier of the organization role.
     * @param replaceOrganizationRoleScopesRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceOrganizationRoleScopes(id: string, replaceOrganizationRoleScopesRequest: ReplaceOrganizationRoleScopesRequest, ): Observable<AxiosResponse<any>>;
    public replaceOrganizationRoleScopes(id: string, replaceOrganizationRoleScopesRequest: ReplaceOrganizationRoleScopesRequest, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling replaceOrganizationRoleScopes.');
        }

        if (replaceOrganizationRoleScopesRequest === null || replaceOrganizationRoleScopesRequest === undefined) {
            throw new Error('Required parameter replaceOrganizationRoleScopesRequest was null or undefined when calling replaceOrganizationRoleScopes.');
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

                return this.httpClient.put<any>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}/scopes`,
                    replaceOrganizationRoleScopesRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update organization role
     * Update organization role details by ID with the given data.
     * @param id The unique identifier of the organization role.
     * @param updateOrganizationRoleRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateOrganizationRole(id: string, updateOrganizationRoleRequest: UpdateOrganizationRoleRequest, ): Observable<AxiosResponse<GetOrganizationRole200Response>>;
    public updateOrganizationRole(id: string, updateOrganizationRoleRequest: UpdateOrganizationRoleRequest, ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateOrganizationRole.');
        }

        if (updateOrganizationRoleRequest === null || updateOrganizationRoleRequest === undefined) {
            throw new Error('Required parameter updateOrganizationRoleRequest was null or undefined when calling updateOrganizationRole.');
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

                return this.httpClient.patch<GetOrganizationRole200Response>(`${this.basePath}/api/organization-roles/${encodeURIComponent(String(id))}`,
                    updateOrganizationRoleRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}
