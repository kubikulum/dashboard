export interface LogtoUser {
  sub: string,
  organization_id: string,
  organizationRoles: {
    organizationId: string;
    roleId: string;
    roleName: string;
}[];
}
