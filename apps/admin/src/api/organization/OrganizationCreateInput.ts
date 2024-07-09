import { UserCreateNestedManyWithoutOrganizationsInput } from "./UserCreateNestedManyWithoutOrganizationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ClusterCreateNestedManyWithoutOrganizationsInput } from "./ClusterCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  name: string;
  members?: UserCreateNestedManyWithoutOrganizationsInput;
  owner?: UserWhereUniqueInput | null;
  clusters?: ClusterCreateNestedManyWithoutOrganizationsInput;
  gardenerProjectNamespace?: string | null;
};
