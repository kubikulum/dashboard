export interface Auth0User {
  sub: string,
  email: string,
  organization_id: string,
  given_name: string,
  family_name: string,
  created_at: number,
  organizationRoles: {
    organizationId: string;
    roleId: string;
    roleName: string;
}[];
}
