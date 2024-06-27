import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  oidcId?: StringNullableFilter;
  organization?: StringNullableFilter;
  organizations?: OrganizationListRelationFilter;
  ownerOrganizations?: OrganizationWhereUniqueInput;
  username?: StringNullableFilter;
};
