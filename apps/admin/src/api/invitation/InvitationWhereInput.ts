import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationMemberListRelationFilter } from "../organizationMember/OrganizationMemberListRelationFilter";

export type InvitationWhereInput = {
  code?: StringFilter;
  email?: StringFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  inviter?: UserWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  organizationMembers?: OrganizationMemberListRelationFilter;
  status?: "PENDING" | "ACCEPTED" | "REVOKED";
};
