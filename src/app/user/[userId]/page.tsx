"use client";

import { UserModel } from "@/domain/models/user.model";
import UserCard from "@/ui/components/UserCard.component";
import Link from "next/link";

export default function EditEmployeePage() {
  // TODO Implement employee details page and delete feature
  const user: UserModel = {
    id: 2,
    name: "Mock User",
    username: "mockuser",
    email: "mock@example.com",
    phone: "1-234-567-8900",
    website: "mockuser.com",
    company: {
      name: "Mock Company",
      catchPhrase: "Mock Catch Phrase",
      bs: "Mock BS"
    },
    address: {
      street: "Mock Street",
      suite: "Mock Suite",
      city: "Mock City",
      zipcode: "Mock Zipcode",
      geo: {
        lat: "Mock Lat",
        lng: "Mock Lng",
      },
    },
  };
  return (
    <main className="flex h-screen flex-col items-start justify-start p-4 gap-4">
      <h1>User Details</h1>
      <UserCard user={user} />
      <Link
        className="border px-2 py-1 rounded-md"
        href={`/user/${user.id}/edit`}
      >
        Edit
      </Link>
    </main>
  );
}
