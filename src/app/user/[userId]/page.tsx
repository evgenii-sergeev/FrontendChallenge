"use client";

import { useDeleteUser } from "@/domain/hooks/useDeleteUser.hook";
import { useGetUserDetails } from "@/domain/hooks/useGetUserDetails.hook";
import ButtonBack from "@/ui/components/ButtonBack.component";
import DeleteConfirmation from "@/ui/components/DeleteConfirmation.component";
import UserCard from "@/ui/components/UserCard.component";
import Link from "next/link";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function UserDetailsPage() {
  const params = useParams();
  const userId = Number(params.userId);
  const router = useRouter();

  const { data: user, isLoading, isError } = useGetUserDetails({ id: userId });
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    deleteUser(
      { id: userId },
      {
        onSuccess: () => {
          setModalOpen(false);
          router.push("/");
        },
      }
    );
  };

  if (isLoading || isDeleting) {
    return (
      <main className="flex h-screen flex-col items-start justify-start p-4 gap-4">
        <span>Loading...</span>
      </main>
    );
  }

  if (isError || !user) {
    return (
      <main className="flex h-screen flex-col items-start justify-start p-4 gap-4">
        <span>Error loading user</span>
      </main>
    );
  }

  return (
    <main className="flex h-screen flex-col items-start justify-start p-4 gap-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2">
          <ButtonBack />
          <h1 className="text-2xl font-bold">User Details</h1>
        </div>
        <div className="flex gap-2">
          <Link
            className="border px-2 py-1 rounded-md"
            href={`/user/${user.id}/edit`}
          >
            Edit
          </Link>
          <button
            onClick={() => setModalOpen(true)}
            className="border px-2 py-1 rounded-md text-red-600 border-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      <UserCard user={user} />
      <DeleteConfirmation
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
    </main>
  );
}
