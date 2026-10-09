import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  userEmail?: string | null;
  username?: string;
  userPassword?: string | null;
  userRole?: "Option1" | null;
  userUsername?: string | null;
};
