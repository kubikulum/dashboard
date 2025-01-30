import { InvitationUpdateManyWithoutUsersInput } from "./InvitationUpdateManyWithoutUsersInput";
import { OrganizationMemberUpdateManyWithoutUsersInput } from "./OrganizationMemberUpdateManyWithoutUsersInput";
import { OrganizationUpdateManyWithoutUsersInput } from "./OrganizationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  invitations?: InvitationUpdateManyWithoutUsersInput;
  lastName?: string | null;
  organization?: string | null;
  organizationMembers?: OrganizationMemberUpdateManyWithoutUsersInput;
  ownerOrganizations?: OrganizationUpdateManyWithoutUsersInput;
  password?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
