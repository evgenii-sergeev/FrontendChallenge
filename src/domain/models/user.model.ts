import { z } from "zod";

export const UserIdSchema = z.number().positive();
export type UserIdModel = z.infer<typeof UserIdSchema>;

export const GeoSchema = z.object({
  lat: z.string(),
  lng: z.string(),
});
export type GeoModel = z.infer<typeof GeoSchema>;

export const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: GeoSchema,
});
export type AddressModel = z.infer<typeof AddressSchema>;

export const CompanySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
});
export type CompanyModel = z.infer<typeof CompanySchema>;

export const UserSchema = z.object({
  id: UserIdSchema.optional(),
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email(),
  address: AddressSchema.optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  company: CompanySchema.optional(),
});
export type UserModel = z.infer<typeof UserSchema>;

export const UserListSchema = UserSchema.array();
export type UserListModel = z.infer<typeof UserListSchema>;
