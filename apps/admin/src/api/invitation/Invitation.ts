import { User } from "../user/User";
import { Organization } from "../organization/Organization";
import { OrganizationMember } from "../organizationMember/OrganizationMember";

export type Invitation = {
  code: string;
  createdAt: Date;
  email: string;
  expirationDate: Date | null;
  id: string;
  inviter?: User;
  organization?: Organization;
  organizationMembers?: Array<OrganizationMember>;
  status?: "PENDING" | "ACCEPTED" | "REVOKED" | null;
  updatedAt: Date;
};
