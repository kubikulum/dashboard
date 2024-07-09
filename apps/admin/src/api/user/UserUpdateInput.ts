import { InputJsonValue } from "../../types";
import { OrganizationUpdateManyWithoutUsersInput } from "./OrganizationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  email?: string | null;
  roles?: InputJsonValue;
  organization?: string | null;
  lastName?: string | null;
  organizations?: OrganizationUpdateManyWithoutUsersInput;
  ownerOrganizations?: OrganizationUpdateManyWithoutUsersInput;
  username?: string;
  password?: string | null;
};
