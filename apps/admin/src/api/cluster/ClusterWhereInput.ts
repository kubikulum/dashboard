import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ClusterWhereInput = {
  clusterType?: "Kubeflow" | "Flytes";
  description?: StringNullableFilter;
  gardenerShootId?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  plan?: "Free" | "Reserved_1" | "Reserved_2" | "Entreprise";
  region?: "EuropeParis_1" | "UsOhio_1";
};
