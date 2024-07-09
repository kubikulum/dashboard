import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ClusterUpdateInput = {
  clusterType?: "kubeflow" | "flyte";
  organization?: OrganizationWhereUniqueInput | null;
};
