import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  userEmail: string | null;
  username: string;
  userPassword: string | null;
  userRole?: "Option1" | null;
  userUsername: string | null;
};
