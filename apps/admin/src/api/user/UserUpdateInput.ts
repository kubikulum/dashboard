import { OrganizationUpdateManyWithoutUsersInput } from "./OrganizationUpdateManyWithoutUsersInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  oidcId?: string | null;
  organization?: string | null;
  organizations?: OrganizationUpdateManyWithoutUsersInput;
  ownerOrganizations?: OrganizationWhereUniqueInput | null;
  password?: string | null;
  roles?: InputJsonValue;
  username?: string | null;
};
