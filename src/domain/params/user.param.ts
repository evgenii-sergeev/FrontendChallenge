import { z } from "zod";
import { UserIdSchema } from "../models/user.model";

export const GetUserByIdSchema = z.object({
  id: UserIdSchema,
});
export type GetUserByIdParams = z.infer<typeof GetUserByIdSchema>;

export const UpdateUserSchema = z.object({
  name: z.string().min(1),
});
export type UpdateUserParams = z.infer<typeof UpdateUserSchema>;
