import { Organization } from "../organization/Organization";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  oidcId: string | null;
  organization: string | null;
  organizations?: Array<Organization>;
  ownerOrganizations?: Organization | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string | null;
};
