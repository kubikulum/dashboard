import { SortOrder } from "../../util/SortOrder";

export type ClusterOrderByInput = {
  clusterType?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  gardenerShootId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organizationId?: SortOrder;
  plan?: SortOrder;
  region?: SortOrder;
  updatedAt?: SortOrder;
};
