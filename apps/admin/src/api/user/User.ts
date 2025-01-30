import { Invitation } from "../invitation/Invitation";
import { OrganizationMember } from "../organizationMember/OrganizationMember";
import { Organization } from "../organization/Organization";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  invitations?: Array<Invitation>;
  lastName: string | null;
  organization: string | null;
  organizationMembers?: Array<OrganizationMember>;
  ownerOrganizations?: Array<Organization>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
