import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationMemberCreateNestedManyWithoutInvitationsInput } from "./OrganizationMemberCreateNestedManyWithoutInvitationsInput";

export type InvitationCreateInput = {
  code: string;
  email: string;
  expirationDate?: Date | null;
  inviter: UserWhereUniqueInput;
  organization: OrganizationWhereUniqueInput;
  organizationMembers?: OrganizationMemberCreateNestedManyWithoutInvitationsInput;
  status?: "PENDING" | "ACCEPTED" | "REVOKED" | null;
};
