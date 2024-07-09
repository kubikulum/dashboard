import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ClusterUpdateManyWithoutOrganizationsInput } from "./ClusterUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  name?: string;
  members?: UserUpdateManyWithoutOrganizationsInput;
  owner?: UserWhereUniqueInput | null;
  clusters?: ClusterUpdateManyWithoutOrganizationsInput;
  gardenerProjectNamespace?: string | null;
};
