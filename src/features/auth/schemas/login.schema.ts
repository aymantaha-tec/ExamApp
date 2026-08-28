import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().nonempty("Username is required"),
  // .min(2, "Username must be at least 2 characters long")
  // .max(50, "Username must be less than 50 characters long"),

  password: z.string().nonempty("Password is required"),
  // password: z
  //   .string()
  //   .nonempty("Password is required")
  //   .min(8, "Password must be at least 8 characters long")
  //   .max(12, "Password must be less than 12 characters long")
  //   .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  //   .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  //   .regex(/[0-9]/, "Password must contain at least one number"),
});
