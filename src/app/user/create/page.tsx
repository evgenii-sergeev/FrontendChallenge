"use client";

import { useCreateUser } from "@/domain/hooks/useCreateUser.hook";
import { type UserModel } from "@/domain/models/user.model";
import { UserForm } from "@/ui/components/UserForm.component";
import { useRouter } from "next/navigation";

import ButtonBack from "@/ui/components/ButtonBack.component";

export default function CreateUserPage() {
  const router = useRouter();
  const createUser = useCreateUser();

  const handleSubmit = async (data: UserModel) => {
    try {
      await createUser.mutateAsync(data, {
        onSuccess: () => {
          router.push("/");
        },
      });
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-4">
      <div className="flex gap-2">
        <ButtonBack />
        <h1 className="mb-6 text-2xl font-bold">Create User</h1>
      </div>

      <UserForm
        onSubmit={handleSubmit}
        isSubmitting={createUser.isPending}
        onCancel={() => router.back()}
        submitLabel="Create User"
      />
    </main>
  );
}
