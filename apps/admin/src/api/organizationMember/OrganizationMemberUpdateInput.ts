import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrganizationMemberUpdateInput = {
  invitation?: InvitationWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput;
  roles?: InputJsonValue;
  status?:
    | "PendingInvitation"
    | "Activated"
    | "Suspended"
    | "InvitationRevoked";
  user?: UserWhereUniqueInput | null;
};
