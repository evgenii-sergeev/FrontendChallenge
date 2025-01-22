"use client";

import { useGetUserDetails } from "@/domain/hooks/useGetUserDetails.hook";
import { useUpdateUser } from "@/domain/hooks/useUpdateUser.hook";
import { type UserModel } from "@/domain/models/user.model";
import { UserForm } from "@/ui/components/UserForm.component";
import { useParams, useRouter } from "next/navigation";

import ButtonBack from "@/ui/components/ButtonBack.component";

export default function EditUserPage() {
  const params = useParams();
  const router = useRouter();
  const userId = Number(params.userId);

  const { data: user, isLoading } = useGetUserDetails({ id: userId });
  const updateUser = useUpdateUser();

  const handleSubmit = async (data: UserModel) => {
    try {
      await updateUser.mutateAsync(
        { ...data, id: userId },
        {
          onSuccess: () => {
            router.push(`/user/${userId}`);
          },
        }
      );
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-4">
      <div className="flex gap-2">
        <ButtonBack route={`/user/${userId}`} />
        <h1 className="mb-6 text-2xl font-bold">Edit User</h1>
      </div>

      <UserForm
        initialData={user}
        onSubmit={handleSubmit}
        isSubmitting={updateUser.isPending}
        onCancel={() => router.back()}
        submitLabel="Update User"
      />
    </main>
  );
}
