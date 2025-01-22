import { UserSchema, type UserModel } from "@/domain/models/user.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface UserFormProps {
  initialData?: UserModel;
  onSubmit: (data: UserModel) => Promise<void>;
  isSubmitting?: boolean;
  onCancel: () => void;
  submitLabel?: string;
}

export function UserForm({
  initialData,
  onSubmit,
  isSubmitting = false,
  onCancel,
  submitLabel = "Submit",
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserModel>({
    resolver: zodResolver(UserSchema),
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl space-y-6"
    >
      {/* Personal Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Personal Information</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name")}
            className="w-full p-2 border rounded text-black"
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            {...register("username")}
            className="w-full p-2 border rounded text-black"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full p-2 border rounded text-black"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            {...register("phone")}
            className="w-full p-2 border rounded text-black"
            placeholder="Phone"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Website</label>
          <input
            {...register("website")}
            className="w-full p-2 border rounded text-black"
            placeholder="Website"
          />
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">
              {errors.website.message}
            </p>
          )}
        </div>
      </div>

      {/* Address */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Address</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Street</label>
          <input
            {...register("address.street")}
            className="w-full p-2 border rounded text-black"
            placeholder="Street"
          />
          {errors.address?.street && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.street.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Suite</label>
          <input
            {...register("address.suite")}
            className="w-full p-2 border rounded text-black"
            placeholder="Suite"
          />
          {errors.address?.suite && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.suite.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            {...register("address.city")}
            className="w-full p-2 border rounded text-black"
            placeholder="City"
          />
          {errors.address?.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.city.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Zipcode</label>
          <input
            {...register("address.zipcode")}
            className="w-full p-2 border rounded text-black"
            placeholder="Zipcode"
          />
          {errors.address?.zipcode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.zipcode.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Latitude</label>
            <input
              {...register("address.geo.lat")}
              className="w-full p-2 border rounded text-black"
              placeholder="Latitude"
            />
            {errors.address?.geo?.lat && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.geo.lat.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Longitude</label>
            <input
              {...register("address.geo.lng")}
              className="w-full p-2 border rounded text-black"
              placeholder="Longitude"
            />
            {errors.address?.geo?.lng && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.geo.lng.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Company */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Company</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            {...register("company.name")}
            className="w-full p-2 border rounded text-black"
            placeholder="Company Name"
          />
          {errors.company?.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.company.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Catch Phrase</label>
          <input
            {...register("company.catchPhrase")}
            className="w-full p-2 border rounded text-black"
            placeholder="Catch Phrase"
          />
          {errors.company?.catchPhrase && (
            <p className="text-red-500 text-sm mt-1">
              {errors.company.catchPhrase.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">BS</label>
          <input
            {...register("company.bs")}
            className="w-full p-2 border rounded text-black"
            placeholder="BS"
          />
          {errors.company?.bs && (
            <p className="text-red-500 text-sm mt-1">
              {errors.company.bs.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="border px-2 py-1 rounded-md"
        >
          {isSubmitting ? "Submitting..." : submitLabel}
        </button>
        <button
          type="button"
          disabled={isSubmitting}
          onClick={onCancel}
          className="px-2 py-1 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
