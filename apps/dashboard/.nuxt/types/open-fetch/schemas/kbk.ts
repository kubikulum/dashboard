export interface paths {
    "/api/users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserController_user"];
        put?: never;
        post?: never;
        delete: operations["UserController_deleteUser"];
        options?: never;
        head?: never;
        patch: operations["UserController_updateUser"];
        trace?: never;
    };
    "/api/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserController_users"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/users/{id}/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserController_findOrganizations"];
        put?: never;
        post: operations["UserController_connectOrganizations"];
        delete: operations["UserController_disconnectOrganizations"];
        options?: never;
        head?: never;
        patch: operations["UserController_updateOrganizations"];
        trace?: never;
    };
    "/api/users/{id}/ownerOrganizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserController_findOwnerOrganizations"];
        put?: never;
        post: operations["UserController_connectOwnerOrganizations"];
        delete: operations["UserController_disconnectOwnerOrganizations"];
        options?: never;
        head?: never;
        patch: operations["UserController_updateOwnerOrganizations"];
        trace?: never;
    };
    "/api/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationController_organizations"];
        put?: never;
        post: operations["OrganizationController_createOrganizationOverride"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationController_organization"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["OrganizationController_updateOrganization"];
        trace?: never;
    };
    "/api/organizations/{id}/clusters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationController_findClusters"];
        put?: never;
        post: operations["OrganizationController_connectClusters"];
        delete: operations["OrganizationController_disconnectClusters"];
        options?: never;
        head?: never;
        patch: operations["OrganizationController_updateClusters"];
        trace?: never;
    };
    "/api/organizations/{id}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationController_findMembers"];
        put?: never;
        post: operations["OrganizationController_connectMembers"];
        delete: operations["OrganizationController_disconnectMembers"];
        options?: never;
        head?: never;
        patch: operations["OrganizationController_updateMembers"];
        trace?: never;
    };
    "/api/clusters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ClusterController_createCluster"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/clusters/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ClusterController_cluster"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/_health/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["HealthController_healthLive"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/_health/ready": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["HealthController_healthReady"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        OrganizationWhereUniqueInput: {
            id: string;
        };
        OrganizationUpdateManyWithoutUsersInput: {
            connect?: components["schemas"]["OrganizationWhereUniqueInput"][];
            disconnect?: components["schemas"]["OrganizationWhereUniqueInput"][];
            set?: components["schemas"]["OrganizationWhereUniqueInput"][];
        };
        UserUpdateInput: {
            email?: string;
            firstName?: string;
            lastName?: string;
            organization?: string;
            organizations?: components["schemas"]["OrganizationUpdateManyWithoutUsersInput"];
            ownerOrganizations?: components["schemas"]["OrganizationUpdateManyWithoutUsersInput"];
            password?: string;
            roles?: Record<string, never>;
            username?: string;
        };
        Cluster: {
            /** @enum {string} */
            clusterType: "kubeflow" | "flyte";
            /** Format: date-time */
            createdAt: string;
            id: string;
            organization?: components["schemas"]["Organization"];
            /** Format: date-time */
            updatedAt: string;
        };
        User: {
            /** Format: date-time */
            createdAt: string;
            email?: string;
            firstName?: string;
            id: string;
            lastName?: string;
            organization?: string;
            organizations?: components["schemas"]["Organization"][];
            ownerOrganizations?: components["schemas"]["Organization"][];
            roles: Record<string, never>;
            /** Format: date-time */
            updatedAt: string;
            username: string;
        };
        Organization: {
            clusters?: components["schemas"]["Cluster"][];
            /** Format: date-time */
            createdAt: string;
            id: string;
            members?: components["schemas"]["User"][];
            name: string;
            owner?: components["schemas"]["User"];
            /** Format: date-time */
            updatedAt: string;
        };
        ForbiddenException: {
            statusCode: number;
            message: string;
        };
        NotFoundException: {
            statusCode: number;
            message: string;
        };
        StringNullableFilter: {
            equals?: string;
            in?: string[];
            notIn?: string[];
            lt?: string;
            lte?: string;
            gt?: string;
            gte?: string;
            contains?: string;
            startsWith?: string;
            endsWith?: string;
            /** @enum {string} */
            mode?: "Default" | "Insensitive";
            not?: string;
        };
        StringFilter: {
            equals?: string;
            in?: string[];
            notIn?: string[];
            lt?: string;
            lte?: string;
            gt?: string;
            gte?: string;
            contains?: string;
            startsWith?: string;
            endsWith?: string;
            /** @enum {string} */
            mode?: "Default" | "Insensitive";
            not?: string;
        };
        ClusterWhereInput: {
            /** @enum {string} */
            clusterType?: "kubeflow" | "flyte";
            id?: components["schemas"]["StringFilter"];
            organization?: components["schemas"]["OrganizationWhereUniqueInput"];
        };
        ClusterListRelationFilter: {
            every?: components["schemas"]["ClusterWhereInput"];
            some?: components["schemas"]["ClusterWhereInput"];
            none?: components["schemas"]["ClusterWhereInput"];
        };
        UserWhereInput: {
            email?: components["schemas"]["StringNullableFilter"];
            firstName?: components["schemas"]["StringNullableFilter"];
            id?: components["schemas"]["StringFilter"];
            lastName?: components["schemas"]["StringNullableFilter"];
            organization?: components["schemas"]["StringNullableFilter"];
            organizations?: components["schemas"]["OrganizationListRelationFilter"];
            ownerOrganizations?: components["schemas"]["OrganizationListRelationFilter"];
            username?: components["schemas"]["StringFilter"];
        };
        UserListRelationFilter: {
            every?: components["schemas"]["UserWhereInput"];
            some?: components["schemas"]["UserWhereInput"];
            none?: components["schemas"]["UserWhereInput"];
        };
        OrganizationWhereInput: {
            clusters?: components["schemas"]["ClusterListRelationFilter"];
            id?: components["schemas"]["StringFilter"];
            members?: components["schemas"]["UserListRelationFilter"];
            name?: components["schemas"]["StringFilter"];
        };
        OrganizationListRelationFilter: {
            every?: components["schemas"]["OrganizationWhereInput"];
            some?: components["schemas"]["OrganizationWhereInput"];
            none?: components["schemas"]["OrganizationWhereInput"];
        };
        Array: Record<string, never>;
        Number: Record<string, never>;
        ClusterWhereUniqueInput: {
            id: string;
        };
        ClusterCreateNestedManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["ClusterWhereUniqueInput"][];
        };
        UserWhereUniqueInput: {
            id: string;
        };
        UserCreateNestedManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["UserWhereUniqueInput"][];
        };
        OrganizationCreateInput: {
            clusters?: components["schemas"]["ClusterCreateNestedManyWithoutOrganizationsInput"];
            members?: components["schemas"]["UserCreateNestedManyWithoutOrganizationsInput"];
            name: string;
            owner?: components["schemas"]["UserWhereUniqueInput"];
        };
        ClusterUpdateManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["ClusterWhereUniqueInput"][];
            disconnect?: components["schemas"]["ClusterWhereUniqueInput"][];
            set?: components["schemas"]["ClusterWhereUniqueInput"][];
        };
        UserUpdateManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["UserWhereUniqueInput"][];
            disconnect?: components["schemas"]["UserWhereUniqueInput"][];
            set?: components["schemas"]["UserWhereUniqueInput"][];
        };
        OrganizationUpdateInput: {
            clusters?: components["schemas"]["ClusterUpdateManyWithoutOrganizationsInput"];
            members?: components["schemas"]["UserUpdateManyWithoutOrganizationsInput"];
            name?: string;
            owner?: components["schemas"]["UserWhereUniqueInput"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    UserController_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotFoundException"];
                };
            };
        };
    };
    UserController_deleteUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotFoundException"];
                };
            };
        };
    };
    UserController_updateUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserUpdateInput"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotFoundException"];
                };
            };
        };
    };
    UserController_users: {
        parameters: {
            query?: {
                where?: components["schemas"]["UserWhereInput"];
                orderBy?: components["schemas"]["Array"];
                skip?: number;
                take?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"][];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
        };
    };
    UserController_findOrganizations: {
        parameters: {
            query?: {
                where?: components["schemas"]["OrganizationWhereInput"];
                orderBy?: components["schemas"]["Array"];
                skip?: number;
                take?: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_connectOrganizations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_disconnectOrganizations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_updateOrganizations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_findOwnerOrganizations: {
        parameters: {
            query?: {
                where?: components["schemas"]["OrganizationWhereInput"];
                orderBy?: components["schemas"]["Array"];
                skip?: number;
                take?: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_connectOwnerOrganizations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_disconnectOwnerOrganizations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_updateOwnerOrganizations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationController_organizations: {
        parameters: {
            query?: {
                where?: components["schemas"]["OrganizationWhereInput"];
                orderBy?: components["schemas"]["Array"];
                skip?: number;
                take?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Organization"][];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
        };
    };
    OrganizationController_createOrganizationOverride: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OrganizationCreateInput"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Organization"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
        };
    };
    OrganizationController_organization: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Organization"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotFoundException"];
                };
            };
        };
    };
    OrganizationController_updateOrganization: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OrganizationUpdateInput"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Organization"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotFoundException"];
                };
            };
        };
    };
    OrganizationController_findClusters: {
        parameters: {
            query?: {
                where?: components["schemas"]["ClusterWhereInput"];
                orderBy?: components["schemas"]["Array"];
                skip?: number;
                take?: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationController_connectClusters: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationController_disconnectClusters: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationController_updateClusters: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationController_findMembers: {
        parameters: {
            query?: {
                where?: components["schemas"]["UserWhereInput"];
                orderBy?: components["schemas"]["Array"];
                skip?: number;
                take?: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationController_connectMembers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationController_disconnectMembers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OrganizationController_updateMembers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClusterController_createCluster: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Cluster"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
        };
    };
    ClusterController_cluster: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Cluster"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForbiddenException"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotFoundException"];
                };
            };
        };
    };
    HealthController_healthLive: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthController_healthReady: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
