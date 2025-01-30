import { ClusterUpdateManyWithoutOrganizationsInput } from "./ClusterUpdateManyWithoutOrganizationsInput";
import { InvitationUpdateManyWithoutOrganizationsInput } from "./InvitationUpdateManyWithoutOrganizationsInput";
import { OrganizationMemberUpdateManyWithoutOrganizationsInput } from "./OrganizationMemberUpdateManyWithoutOrganizationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrganizationUpdateInput = {
  clusters?: ClusterUpdateManyWithoutOrganizationsInput;
  gardenerProjectNamespace?: string | null;
  invitations?: InvitationUpdateManyWithoutOrganizationsInput;
  name?: string;
  organizationMembers?: OrganizationMemberUpdateManyWithoutOrganizationsInput;
  owner?: UserWhereUniqueInput | null;
};
