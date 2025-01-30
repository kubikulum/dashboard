import { SortOrder } from "../../util/SortOrder";

export type InvitationOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  inviterId?: SortOrder;
  organizationId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
