"use client";

import { useGetUserList } from "@/domain/hooks/useGetUserList.hook";
import UserCard from "@/ui/components/UserCard.component";
import { House } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { data, isLoading, isError } = useGetUserList();

  return (
    <main className="flex h-screen flex-col items-start justify-start p-4 gap-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center mb-4">
          <House />
          <h1 className="text-2xl font-bold">
            Employee List {data && <span>({data.length})</span>}
          </h1>
        </div>
        <div className="flex gap-2">
          <Link className="border px-2 py-1 rounded-md" href={`/user/create`}>
            Create
          </Link>
        </div>
      </div>
      {data && (
        <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((user, index) => (
            <li key={index} className="h-full">
              <Link href={`/user/${user.id}`} className="h-full">
                <UserCard user={user} />
              </Link>
            </li>
          ))}
        </ol>
      )}

      {isLoading && (
        <div className="flex-1 w-full items-center justify-center">
          <span>loading</span>
        </div>
      )}
      {!data && !isLoading && isError && (
        <div className="flex-1 w-full items-center justify-center">
          <span>error</span>
        </div>
      )}
    </main>
  );
}
