import { InputJsonValue } from "../../types";
import { OrganizationCreateNestedManyWithoutUsersInput } from "./OrganizationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  email?: string | null;
  roles: InputJsonValue;
  organization?: string | null;
  lastName?: string | null;
  organizations?: OrganizationCreateNestedManyWithoutUsersInput;
  ownerOrganizations?: OrganizationCreateNestedManyWithoutUsersInput;
  username: string;
  password?: string | null;
};
