import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrganizationUpdateInput = {
  members?: UserUpdateManyWithoutOrganizationsInput;
  name?: string | null;
  oidcId?: string | null;
  owner?: UserWhereUniqueInput | null;
};
