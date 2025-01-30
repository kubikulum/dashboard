import { ClusterCreateNestedManyWithoutOrganizationsInput } from "./ClusterCreateNestedManyWithoutOrganizationsInput";
import { InvitationCreateNestedManyWithoutOrganizationsInput } from "./InvitationCreateNestedManyWithoutOrganizationsInput";
import { OrganizationMemberCreateNestedManyWithoutOrganizationsInput } from "./OrganizationMemberCreateNestedManyWithoutOrganizationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrganizationCreateInput = {
  clusters?: ClusterCreateNestedManyWithoutOrganizationsInput;
  gardenerProjectNamespace?: string | null;
  invitations?: InvitationCreateNestedManyWithoutOrganizationsInput;
  name: string;
  organizationMembers?: OrganizationMemberCreateNestedManyWithoutOrganizationsInput;
  owner?: UserWhereUniqueInput | null;
};
