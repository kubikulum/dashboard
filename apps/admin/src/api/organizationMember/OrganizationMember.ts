import { Invitation } from "../invitation/Invitation";
import { Organization } from "../organization/Organization";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type OrganizationMember = {
  createdAt: Date;
  id: string;
  invitation?: Invitation | null;
  organization?: Organization;
  roles: JsonValue;
  status?:
    | "PendingInvitation"
    | "Activated"
    | "Suspended"
    | "InvitationRevoked";
  updatedAt: Date;
  user?: User | null;
};
