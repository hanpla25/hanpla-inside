import React from "react";
import { LoginButton, Logout, ProfileButton } from "./buttons";
import { getUserFromToken } from "@/app/lib/data";

export default async function Footer() {
  const user = await getUserFromToken();

  return (
    <footer className="bg-[#29367c] flex gap-10 justify-center py-10">
      {user ? (
        <>
          <ProfileButton />
          <Logout />
        </>
      ) : (
        <LoginButton />
      )}
    </footer>
  );
}
