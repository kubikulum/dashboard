import { OrganizationMemberWhereInput } from "./OrganizationMemberWhereInput";
import { OrganizationMemberOrderByInput } from "./OrganizationMemberOrderByInput";

export type OrganizationMemberFindManyArgs = {
  where?: OrganizationMemberWhereInput;
  orderBy?: Array<OrganizationMemberOrderByInput>;
  skip?: number;
  take?: number;
};
