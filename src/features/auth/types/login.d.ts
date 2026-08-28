import { type z } from "zod";
import { loginSchema } from "../schemas/login.schema";
export type ILoginFormValues = z.infer<typeof loginSchema>;
import type { IUser } from "@/features/user/types/User.d.ts";

export interface ILoginResponse {
  User: IUser;
  token: string;
}
