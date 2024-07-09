export interface Auth0User {
  sub: string,
  email: string,
  organization_id: string,
  organizationRoles: {
    organizationId: string;
    roleId: string;
    roleName: string;
}[];
}
