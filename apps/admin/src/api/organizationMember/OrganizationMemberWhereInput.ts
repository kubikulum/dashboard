import { StringFilter } from "../../util/StringFilter";
import { InvitationWhereUniqueInput } from "../invitation/InvitationWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrganizationMemberWhereInput = {
  id?: StringFilter;
  invitation?: InvitationWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  status?:
    | "PendingInvitation"
    | "Activated"
    | "Suspended"
    | "InvitationRevoked";
  user?: UserWhereUniqueInput;
};
