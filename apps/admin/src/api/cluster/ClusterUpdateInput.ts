import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ClusterUpdateInput = {
  clusterType?: "Kubeflow" | "Flytes";
  description?: string | null;
  gardenerShootId?: string | null;
  name?: string;
  organization?: OrganizationWhereUniqueInput | null;
  plan?: "Free" | "Reserved_1" | "Reserved_2" | "Entreprise";
  region?: "EuropeParis_1" | "UsOhio_1";
};
