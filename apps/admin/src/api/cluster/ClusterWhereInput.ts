import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ClusterWhereInput = {
  id?: StringFilter;
  clusterType?: "kubeflow" | "flyte";
  organization?: OrganizationWhereUniqueInput;
};
