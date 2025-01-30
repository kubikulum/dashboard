import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrganizationMemberCreateInput = {
  invitation?: InvitationWhereUniqueInput | null;
  organization: OrganizationWhereUniqueInput;
  roles: InputJsonValue;
  status: "PendingInvitation" | "Activated" | "Suspended" | "InvitationRevoked";
  user?: UserWhereUniqueInput | null;
};
