import { ClusterListRelationFilter } from "../cluster/ClusterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationListRelationFilter } from "../invitation/InvitationListRelationFilter";
import { OrganizationMemberListRelationFilter } from "../organizationMember/OrganizationMemberListRelationFilter";

export type OrganizationWhereInput = {
  clusters?: ClusterListRelationFilter;
  gardenerProjectNamespace?: StringNullableFilter;
  id?: StringFilter;
  invitations?: InvitationListRelationFilter;
  name?: StringFilter;
  organizationMembers?: OrganizationMemberListRelationFilter;
};
