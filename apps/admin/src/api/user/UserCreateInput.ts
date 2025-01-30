import { InvitationCreateNestedManyWithoutUsersInput } from "./InvitationCreateNestedManyWithoutUsersInput";
import { OrganizationMemberCreateNestedManyWithoutUsersInput } from "./OrganizationMemberCreateNestedManyWithoutUsersInput";
import { OrganizationCreateNestedManyWithoutUsersInput } from "./OrganizationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  invitations?: InvitationCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  organization?: string | null;
  organizationMembers?: OrganizationMemberCreateNestedManyWithoutUsersInput;
  ownerOrganizations?: OrganizationCreateNestedManyWithoutUsersInput;
  password?: string | null;
  roles: InputJsonValue;
  username: string;
};
