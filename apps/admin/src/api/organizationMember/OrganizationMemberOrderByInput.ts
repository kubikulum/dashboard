import { SortOrder } from "../../util/SortOrder";

export type OrganizationMemberOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  invitationId?: SortOrder;
  organizationId?: SortOrder;
  roles?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
