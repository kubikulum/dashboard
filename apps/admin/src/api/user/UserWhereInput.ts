import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  email?: StringNullableFilter;
  organization?: StringNullableFilter;
  lastName?: StringNullableFilter;
  organizations?: OrganizationListRelationFilter;
  ownerOrganizations?: OrganizationListRelationFilter;
  username?: StringFilter;
};
