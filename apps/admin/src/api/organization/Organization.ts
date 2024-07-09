import { User } from "../user/User";
import { Cluster } from "../cluster/Cluster";

export type Organization = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  members?: Array<User>;
  owner?: User | null;
  clusters?: Array<Cluster>;
  gardenerProjectNamespace: string | null;
};
