import { Organization } from "../organization/Organization";

export type Cluster = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clusterType?: "kubeflow" | "flyte";
  organization?: Organization | null;
};
