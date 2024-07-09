import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { ClusterListRelationFilter } from "../cluster/ClusterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrganizationWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  members?: UserListRelationFilter;
  clusters?: ClusterListRelationFilter;
  gardenerProjectNamespace?: StringNullableFilter;
};
