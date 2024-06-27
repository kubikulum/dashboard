import { OrganizationCreateNestedManyWithoutUsersInput } from "./OrganizationCreateNestedManyWithoutUsersInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  oidcId?: string | null;
  organization?: string | null;
  organizations?: OrganizationCreateNestedManyWithoutUsersInput;
  ownerOrganizations?: OrganizationWhereUniqueInput | null;
  password?: string | null;
  roles: InputJsonValue;
  username?: string | null;
};
