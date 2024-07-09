import { ClusterWhereInput } from "./ClusterWhereInput";
import { ClusterOrderByInput } from "./ClusterOrderByInput";

export type ClusterFindManyArgs = {
  where?: ClusterWhereInput;
  orderBy?: Array<ClusterOrderByInput>;
  skip?: number;
  take?: number;
};
