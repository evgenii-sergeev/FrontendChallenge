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

export const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  role: z.string(),
});
export type CreateUserParams = z.infer<typeof CreateUserSchema>;

export const UpdateUserByIdSchema = z.object({
  id: UserIdSchema,
  params: UpdateUserSchema,
});
export type UpdateUserByIdParams = z.infer<typeof UpdateUserByIdSchema>;

export const DeleteUserByIdSchema = z.object({
  id: UserIdSchema,
});
export type DeleteUserByIdParams = z.infer<typeof DeleteUserByIdSchema>;
