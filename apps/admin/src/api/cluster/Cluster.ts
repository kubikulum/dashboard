import { Organization } from "../organization/Organization";

export type Cluster = {
  clusterType?: "Kubeflow" | "Flytes";
  createdAt: Date;
  description: string | null;
  gardenerShootId: string | null;
  id: string;
  name: string;
  organization?: Organization | null;
  plan?: "Free" | "Reserved_1" | "Reserved_2" | "Entreprise";
  region?: "EuropeParis_1" | "UsOhio_1";
  updatedAt: Date;
};
