import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrganizationWhereInput = {
  id?: StringFilter;
  members?: UserListRelationFilter;
  name?: StringNullableFilter;
  oidcId?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
};
