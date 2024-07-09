import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  organization?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
};
