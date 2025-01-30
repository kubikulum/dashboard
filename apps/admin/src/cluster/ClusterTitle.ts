import { Cluster as TCluster } from "../api/cluster/Cluster";

export const CLUSTER_TITLE_FIELD = "name";

export const ClusterTitle = (record: TCluster): string => {
  return record.name?.toString() || String(record.id);
};
