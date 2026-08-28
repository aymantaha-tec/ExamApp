import type { GENDER } from "../constant/gender.constent.ts";
import type { ROLE } from "../constant/role.constant.ts";

export type IGender = (typeof GENDER)[keyof typeof GENDER];

export type IRole = (typeof ROLE)[keyof typeof ROLE];

export interface IUser {
  id: string;
  username: string;
  email: string;
  phone: string | null;
  firstName: string;
  lastName: string;
  gender: IGender;
  emailVerified: boolean;
  phoneVerified: boolean;
  role: IRole;
  createdAt: string;
}
