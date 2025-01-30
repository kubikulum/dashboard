import { Cluster } from "../cluster/Cluster";
import { Invitation } from "../invitation/Invitation";
import { OrganizationMember } from "../organizationMember/OrganizationMember";
import { User } from "../user/User";

export type Organization = {
  clusters?: Array<Cluster>;
  createdAt: Date;
  gardenerProjectNamespace: string | null;
  id: string;
  invitations?: Array<Invitation>;
  name: string;
  organizationMembers?: Array<OrganizationMember>;
  owner?: User | null;
  updatedAt: Date;
};
