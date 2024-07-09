import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ClusterCreateInput = {
  clusterType: "kubeflow" | "flyte";
  organization?: OrganizationWhereUniqueInput | null;
};
