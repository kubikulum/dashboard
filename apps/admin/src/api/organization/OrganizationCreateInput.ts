import { UserCreateNestedManyWithoutOrganizationsInput } from "./UserCreateNestedManyWithoutOrganizationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrganizationCreateInput = {
  members?: UserCreateNestedManyWithoutOrganizationsInput;
  name?: string | null;
  oidcId?: string | null;
  owner?: UserWhereUniqueInput | null;
};
