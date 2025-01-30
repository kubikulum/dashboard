import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationMemberUpdateManyWithoutInvitationsInput } from "./OrganizationMemberUpdateManyWithoutInvitationsInput";

export type InvitationUpdateInput = {
  code?: string;
  email?: string;
  expirationDate?: Date | null;
  inviter?: UserWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  organizationMembers?: OrganizationMemberUpdateManyWithoutInvitationsInput;
  status?: "PENDING" | "ACCEPTED" | "REVOKED" | null;
};
