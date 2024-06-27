import { User } from "../user/User";

export type Organization = {
  createdAt: Date;
  id: string;
  members?: Array<User>;
  name: string | null;
  oidcId: string | null;
  owner?: User | null;
  updatedAt: Date;
};
