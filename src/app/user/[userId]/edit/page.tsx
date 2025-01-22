"use client";

import { useGetUserDetails } from "@/domain/hooks/useGetUserDetails.hook";
import { useUpdateUser } from "@/domain/hooks/useUpdateUser.hook";
import { UserSchema, type UserModel } from "@/domain/models/user.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EditUserPage() {
  const params = useParams();
  const router = useRouter();
  const userId = Number(params.userId);

  const { data: user, isLoading } = useGetUserDetails({ id: userId });
  const updateUser = useUpdateUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserModel>({
    resolver: zodResolver(UserSchema),
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = async (data: UserModel) => {
    try {
      await updateUser.mutateAsync({ ...data, id: userId }, {
        onSuccess: () => {
          router.push(`/user/${userId}`);
        }
      });
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-4">
      <h1 className="mb-6 text-2xl font-bold">Edit User</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl space-y-6">
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
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.address.street.message}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.address.suite.message}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.address.city.message}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.address.zipcode.message}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.address.geo.lat.message}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.address.geo.lng.message}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.company.name.message}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.company.catchPhrase.message}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.company.bs.message}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="border px-2 py-1 rounded-md"
          >
            {isSubmitting ? "Updating..." : "Update User"}
          </button>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => router.back()}
            className="border px-2 py-1 rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
