import { SortOrder } from "../../util/SortOrder";

export type ClusterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  clusterType?: SortOrder;
  organizationId?: SortOrder;
};
