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
    "/api/users/{id}/organizationMembers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserController_findOrganizationMembers"];
        put?: never;
        post: operations["UserController_connectOrganizationMembers"];
        delete: operations["UserController_disconnectOrganizationMembers"];
        options?: never;
        head?: never;
        patch: operations["UserController_updateOrganizationMembers"];
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
    "/api/users/{id}/invitations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["UserController_findInvitations"];
        put?: never;
        post: operations["UserController_connectInvitations"];
        delete: operations["UserController_disconnectInvitations"];
        options?: never;
        head?: never;
        patch: operations["UserController_updateInvitations"];
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
    "/api/organizations/{id}/invitations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationController_findInvitations"];
        put?: never;
        post: operations["OrganizationController_connectInvitations"];
        delete: operations["OrganizationController_disconnectInvitations"];
        options?: never;
        head?: never;
        patch: operations["OrganizationController_updateInvitations"];
        trace?: never;
    };
    "/api/organizations/{id}/organizationMembers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationController_findOrganizationMembers"];
        put?: never;
        post: operations["OrganizationController_connectOrganizationMembers"];
        delete: operations["OrganizationController_disconnectOrganizationMembers"];
        options?: never;
        head?: never;
        patch: operations["OrganizationController_updateOrganizationMembers"];
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
    "/api/invitations/pending": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InvitationController_pending"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/invitations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InvitationController_invitation"];
        put?: never;
        post?: never;
        delete: operations["InvitationController_deleteInvitation"];
        options?: never;
        head?: never;
        patch: operations["InvitationController_updateInvitation"];
        trace?: never;
    };
    "/api/invitations/{id}/resend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["InvitationController_resendInvitation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/invitations/{id}/accept": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["InvitationController_accept"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/invitations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InvitationController_invitations"];
        put?: never;
        post: operations["InvitationController_createInvitation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/invitations/{id}/organizationMembers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["InvitationController_findOrganizationMembers"];
        put?: never;
        post: operations["InvitationController_connectOrganizationMembers"];
        delete: operations["InvitationController_disconnectOrganizationMembers"];
        options?: never;
        head?: never;
        patch: operations["InvitationController_updateOrganizationMembers"];
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
    "/api/organizationMembers/{id}/updateStatus": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["OrganizationMemberController_updateOrganizationMemberStatus"];
        trace?: never;
    };
    "/api/organizationMembers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationMemberController_organizationMembers"];
        put?: never;
        post: operations["OrganizationMemberController_createOrganizationMember"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/organizationMembers/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrganizationMemberController_organizationMember"];
        put?: never;
        post?: never;
        delete: operations["OrganizationMemberController_deleteOrganizationMember"];
        options?: never;
        head?: never;
        patch: operations["OrganizationMemberController_updateOrganizationMember"];
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
        InvitationWhereUniqueInput: {
            id: string;
        };
        InvitationUpdateManyWithoutUsersInput: {
            connect?: components["schemas"]["InvitationWhereUniqueInput"][];
            disconnect?: components["schemas"]["InvitationWhereUniqueInput"][];
            set?: components["schemas"]["InvitationWhereUniqueInput"][];
        };
        OrganizationMemberWhereUniqueInput: {
            id: string;
        };
        OrganizationMemberUpdateManyWithoutUsersInput: {
            connect?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
            disconnect?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
            set?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
        };
        UserUpdateInput: {
            firstName?: string;
            email?: string;
            roles?: Record<string, never>;
            organization?: string;
            lastName?: string;
            ownerOrganizations?: components["schemas"]["OrganizationUpdateManyWithoutUsersInput"];
            username?: string;
            password?: string;
            invitations?: components["schemas"]["InvitationUpdateManyWithoutUsersInput"];
            organizationMembers?: components["schemas"]["OrganizationMemberUpdateManyWithoutUsersInput"];
        };
        OrganizationMember: {
            id: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            user?: components["schemas"]["User"];
            organization: components["schemas"]["Organization"];
            invitation?: components["schemas"]["Invitation"];
            roles: Record<string, never>;
            /** @enum {string} */
            status: "PendingInvitation" | "Activated" | "Suspended" | "InvitationRevoked";
        };
        Invitation: {
            id: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            email: string;
            /** @enum {string} */
            status?: "PENDING" | "ACCEPTED" | "REVOKED";
            expirationDate?: Record<string, never>;
            organization: components["schemas"]["Organization"];
            inviter: components["schemas"]["User"];
            code: string;
            organizationMembers?: components["schemas"]["OrganizationMember"][];
        };
        User: {
            id: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            firstName?: string;
            email?: string;
            roles: Record<string, never>;
            organization?: string;
            lastName?: string;
            ownerOrganizations?: components["schemas"]["Organization"][];
            username: string;
            invitations?: components["schemas"]["Invitation"][];
            organizationMembers?: components["schemas"]["OrganizationMember"][];
        };
        Cluster: {
            id: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            /** @enum {string} */
            clusterType: "kubeflow" | "Flytes";
            organization?: components["schemas"]["Organization"];
            /** @enum {string} */
            plan?: "Free" | "Reserved_1";
        };
        Organization: {
            id: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            name: string;
            owner?: components["schemas"]["User"];
            clusters?: components["schemas"]["Cluster"][];
            gardenerProjectNamespace?: string;
            invitations?: components["schemas"]["Invitation"][];
            organizationMembers?: components["schemas"]["OrganizationMember"][];
        };
        ForbiddenException: {
            statusCode: number;
            message: string;
        };
        NotFoundException: {
            statusCode: number;
            message: string;
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
        UserWhereUniqueInput: {
            id: string;
        };
        OrganizationMemberWhereInput: {
            id?: components["schemas"]["StringFilter"];
            user?: components["schemas"]["UserWhereUniqueInput"];
            organization?: components["schemas"]["OrganizationWhereUniqueInput"];
            invitation?: components["schemas"]["InvitationWhereUniqueInput"];
            /** @enum {string} */
            status?: "PendingInvitation" | "Activated" | "Suspended" | "InvitationRevoked";
        };
        Array: Record<string, never>;
        Number: Record<string, never>;
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
        ClusterWhereInput: {
            id?: components["schemas"]["StringFilter"];
            /** @enum {string} */
            clusterType?: "kubeflow" | "Flytes";
            organization?: components["schemas"]["OrganizationWhereUniqueInput"];
            /** @enum {string} */
            plan?: "Free" | "Reserved_1";
        };
        ClusterListRelationFilter: {
            every?: components["schemas"]["ClusterWhereInput"];
            some?: components["schemas"]["ClusterWhereInput"];
            none?: components["schemas"]["ClusterWhereInput"];
        };
        DateTimeNullableFilter: {
            /** Format: date-time */
            equals?: string;
            in?: string[];
            notIn?: string[];
            /** Format: date-time */
            lt?: string;
            /** Format: date-time */
            lte?: string;
            /** Format: date-time */
            gt?: string;
            /** Format: date-time */
            gte?: string;
            /** Format: date-time */
            not?: string;
        };
        OrganizationMemberListRelationFilter: {
            every?: components["schemas"]["OrganizationMemberWhereInput"];
            some?: components["schemas"]["OrganizationMemberWhereInput"];
            none?: components["schemas"]["OrganizationMemberWhereInput"];
        };
        InvitationWhereInput: {
            id?: components["schemas"]["StringFilter"];
            email?: components["schemas"]["StringFilter"];
            /** @enum {string} */
            status?: "PENDING" | "ACCEPTED" | "REVOKED";
            expirationDate?: components["schemas"]["DateTimeNullableFilter"];
            organization?: components["schemas"]["OrganizationWhereUniqueInput"];
            inviter?: components["schemas"]["UserWhereUniqueInput"];
            code?: components["schemas"]["StringFilter"];
            organizationMembers?: components["schemas"]["OrganizationMemberListRelationFilter"];
        };
        InvitationListRelationFilter: {
            every?: components["schemas"]["InvitationWhereInput"];
            some?: components["schemas"]["InvitationWhereInput"];
            none?: components["schemas"]["InvitationWhereInput"];
        };
        OrganizationWhereInput: {
            id?: components["schemas"]["StringFilter"];
            name?: components["schemas"]["StringFilter"];
            clusters?: components["schemas"]["ClusterListRelationFilter"];
            gardenerProjectNamespace?: components["schemas"]["StringNullableFilter"];
            invitations?: components["schemas"]["InvitationListRelationFilter"];
            organizationMembers?: components["schemas"]["OrganizationMemberListRelationFilter"];
        };
        OrganizationListRelationFilter: {
            every?: components["schemas"]["OrganizationWhereInput"];
            some?: components["schemas"]["OrganizationWhereInput"];
            none?: components["schemas"]["OrganizationWhereInput"];
        };
        UserWhereInput: {
            id?: components["schemas"]["StringFilter"];
            firstName?: components["schemas"]["StringNullableFilter"];
            email?: components["schemas"]["StringNullableFilter"];
            organization?: components["schemas"]["StringNullableFilter"];
            lastName?: components["schemas"]["StringNullableFilter"];
            ownerOrganizations?: components["schemas"]["OrganizationListRelationFilter"];
            username?: components["schemas"]["StringFilter"];
            invitations?: components["schemas"]["InvitationListRelationFilter"];
            organizationMembers?: components["schemas"]["OrganizationMemberListRelationFilter"];
        };
        ClusterWhereUniqueInput: {
            id: string;
        };
        ClusterCreateNestedManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["ClusterWhereUniqueInput"][];
        };
        InvitationCreateNestedManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["InvitationWhereUniqueInput"][];
        };
        OrganizationMemberCreateNestedManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
        };
        OrganizationCreateInput: {
            name: string;
            owner?: components["schemas"]["UserWhereUniqueInput"];
            clusters?: components["schemas"]["ClusterCreateNestedManyWithoutOrganizationsInput"];
            gardenerProjectNamespace?: string;
            invitations?: components["schemas"]["InvitationCreateNestedManyWithoutOrganizationsInput"];
            organizationMembers?: components["schemas"]["OrganizationMemberCreateNestedManyWithoutOrganizationsInput"];
        };
        ClusterUpdateManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["ClusterWhereUniqueInput"][];
            disconnect?: components["schemas"]["ClusterWhereUniqueInput"][];
            set?: components["schemas"]["ClusterWhereUniqueInput"][];
        };
        InvitationUpdateManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["InvitationWhereUniqueInput"][];
            disconnect?: components["schemas"]["InvitationWhereUniqueInput"][];
            set?: components["schemas"]["InvitationWhereUniqueInput"][];
        };
        OrganizationMemberUpdateManyWithoutOrganizationsInput: {
            connect?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
            disconnect?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
            set?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
        };
        OrganizationUpdateInput: {
            name?: string;
            owner?: components["schemas"]["UserWhereUniqueInput"];
            clusters?: components["schemas"]["ClusterUpdateManyWithoutOrganizationsInput"];
            gardenerProjectNamespace?: string;
            invitations?: components["schemas"]["InvitationUpdateManyWithoutOrganizationsInput"];
            organizationMembers?: components["schemas"]["OrganizationMemberUpdateManyWithoutOrganizationsInput"];
        };
        OrganizationMemberCreateNestedManyWithoutInvitationsInput: {
            connect?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
        };
        InvitationCreateInput: {
            email: string;
            /** @enum {string} */
            status?: "PENDING" | "ACCEPTED" | "REVOKED";
            expirationDate?: Record<string, never>;
            organization: components["schemas"]["OrganizationWhereUniqueInput"];
            inviter: components["schemas"]["UserWhereUniqueInput"];
            code: string;
            organizationMembers?: components["schemas"]["OrganizationMemberCreateNestedManyWithoutInvitationsInput"];
        };
        OrganizationMemberUpdateManyWithoutInvitationsInput: {
            connect?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
            disconnect?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
            set?: components["schemas"]["OrganizationMemberWhereUniqueInput"][];
        };
        InvitationUpdateInput: {
            email?: string;
            /** @enum {string} */
            status?: "PENDING" | "ACCEPTED" | "REVOKED";
            expirationDate?: Record<string, never>;
            organization?: components["schemas"]["OrganizationWhereUniqueInput"];
            inviter?: components["schemas"]["UserWhereUniqueInput"];
            code?: string;
            organizationMembers?: components["schemas"]["OrganizationMemberUpdateManyWithoutInvitationsInput"];
        };
        OrganizationMemberUpdateStatusInput: {
            /** @enum {string} */
            status?: "PendingInvitation" | "Activated" | "Suspended" | "InvitationRevoked";
        };
        OrganizationMemberCreateInput: {
            user?: components["schemas"]["UserWhereUniqueInput"];
            organization: components["schemas"]["OrganizationWhereUniqueInput"];
            invitation?: components["schemas"]["InvitationWhereUniqueInput"];
            roles: Record<string, never>;
            /** @enum {string} */
            status: "PendingInvitation" | "Activated" | "Suspended" | "InvitationRevoked";
        };
        OrganizationMemberUpdateInput: {
            user?: components["schemas"]["UserWhereUniqueInput"];
            organization?: components["schemas"]["OrganizationWhereUniqueInput"];
            invitation?: components["schemas"]["InvitationWhereUniqueInput"];
            roles?: Record<string, never>;
            /** @enum {string} */
            status?: "PendingInvitation" | "Activated" | "Suspended" | "InvitationRevoked";
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
    UserController_findOrganizationMembers: {
        parameters: {
            query?: {
                where?: components["schemas"]["OrganizationMemberWhereInput"];
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
    UserController_connectOrganizationMembers: {
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
    UserController_disconnectOrganizationMembers: {
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
    UserController_updateOrganizationMembers: {
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
    UserController_findInvitations: {
        parameters: {
            query?: {
                where?: components["schemas"]["InvitationWhereInput"];
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
    UserController_connectInvitations: {
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
    UserController_disconnectInvitations: {
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
    UserController_updateInvitations: {
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
    OrganizationController_findInvitations: {
        parameters: {
            query?: {
                where?: components["schemas"]["InvitationWhereInput"];
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
    OrganizationController_connectInvitations: {
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
    OrganizationController_disconnectInvitations: {
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
    OrganizationController_updateInvitations: {
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
    OrganizationController_findOrganizationMembers: {
        parameters: {
            query?: {
                where?: components["schemas"]["OrganizationMemberWhereInput"];
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
    OrganizationController_connectOrganizationMembers: {
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
    OrganizationController_disconnectOrganizationMembers: {
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
    OrganizationController_updateOrganizationMembers: {
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
    InvitationController_pending: {
        parameters: {
            query?: {
                where?: components["schemas"]["InvitationWhereInput"];
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
                    "application/json": components["schemas"]["Invitation"][];
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
    InvitationController_invitation: {
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
                    "application/json": components["schemas"]["Invitation"];
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
    InvitationController_deleteInvitation: {
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
                    "application/json": components["schemas"]["Invitation"];
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
    InvitationController_updateInvitation: {
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
                "application/json": components["schemas"]["InvitationUpdateInput"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Invitation"];
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
    InvitationController_resendInvitation: {
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
                    "application/json": components["schemas"]["Invitation"];
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
    InvitationController_accept: {
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
                    "application/json": components["schemas"]["Invitation"];
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
    InvitationController_invitations: {
        parameters: {
            query?: {
                where?: components["schemas"]["InvitationWhereInput"];
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
                    "application/json": components["schemas"]["Invitation"][];
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
    InvitationController_createInvitation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvitationCreateInput"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Invitation"];
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
    InvitationController_findOrganizationMembers: {
        parameters: {
            query?: {
                where?: components["schemas"]["OrganizationMemberWhereInput"];
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
    InvitationController_connectOrganizationMembers: {
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
    InvitationController_disconnectOrganizationMembers: {
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
    InvitationController_updateOrganizationMembers: {
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
    OrganizationMemberController_updateOrganizationMemberStatus: {
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
                "application/json": components["schemas"]["OrganizationMemberUpdateStatusInput"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationMember"];
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
    OrganizationMemberController_organizationMembers: {
        parameters: {
            query?: {
                where?: components["schemas"]["OrganizationMemberWhereInput"];
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
                    "application/json": components["schemas"]["OrganizationMember"][];
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
    OrganizationMemberController_createOrganizationMember: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OrganizationMemberCreateInput"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationMember"];
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
    OrganizationMemberController_organizationMember: {
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
                    "application/json": components["schemas"]["OrganizationMember"];
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
    OrganizationMemberController_deleteOrganizationMember: {
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
                    "application/json": components["schemas"]["OrganizationMember"];
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
    OrganizationMemberController_updateOrganizationMember: {
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
                "application/json": components["schemas"]["OrganizationMemberUpdateInput"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationMember"];
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
