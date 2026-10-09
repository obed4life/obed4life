import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userEmail?: SortOrder;
  username?: SortOrder;
  userPassword?: SortOrder;
  userRole?: SortOrder;
  userUsername?: SortOrder;
};
