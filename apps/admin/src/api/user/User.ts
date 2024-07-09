import { JsonValue } from "type-fest";
import { Organization } from "../organization/Organization";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  email: string | null;
  roles: JsonValue;
  organization: string | null;
  lastName: string | null;
  organizations?: Array<Organization>;
  ownerOrganizations?: Array<Organization>;
  username: string;
};
