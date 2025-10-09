"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { PowerIcon } from "@heroicons/react/24/outline";

export function LoggedInUser() {
  const { data: session } = useSession();

  if (!session)
    return (
      <div className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3">
        <div className="h-8 w-8 rounded-full bg-gray-400 mr-2"/>
        <div className="hidden md:block"></div>
      </div>
    );

  const user = session.user;
  const avatar = user?.image;

  return (
    <div className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
      {avatar ? (<Image
        src={avatar}
        alt={user?.name ?? "User"}
        width={32}
        height={32}
        className="h-8 w-8 rounded-full bg-gray-400 mr-2"
      />) : (
        <div className="h-8 w-8 rounded-full bg-gray-400 mr-2"/>
      )}

      <span className="text-sm font-medium">{user?.name ?? "User"}</span>
    </div>

  );
}