import { Cluster as TCluster } from "../api/cluster/Cluster";

export const CLUSTER_TITLE_FIELD = "id";

export const ClusterTitle = (record: TCluster): string => {
  return record.id?.toString() || String(record.id);
};
