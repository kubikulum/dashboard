import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationListRelationFilter } from "../invitation/InvitationListRelationFilter";
import { OrganizationMemberListRelationFilter } from "../organizationMember/OrganizationMemberListRelationFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  invitations?: InvitationListRelationFilter;
  lastName?: StringNullableFilter;
  organization?: StringNullableFilter;
  organizationMembers?: OrganizationMemberListRelationFilter;
  ownerOrganizations?: OrganizationListRelationFilter;
  username?: StringFilter;
};
