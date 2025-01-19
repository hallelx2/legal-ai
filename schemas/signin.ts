import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password must be provided"),
});

export type SignInFormData = z.infer<typeof signInSchema>;
