"use client";

import { logout } from "@/app/lib/action";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function LoginButton() {
  const pathname: string = usePathname();

  return (
    <Link
      href={`/login?callbackUrl=${encodeURIComponent(pathname)}`}
      className="border rounded-2xl px-3 text-[#c4cae9] text-sm"
    >
      로그인
    </Link>
  );
}

export function Logout() {
  return (
    <form action={logout}>
      <button className="border rounded-2xl px-3 text-[#c4cae9] text-sm">
        로그아웃
      </button>
    </form>
  );
}

export function ProfileButton() {
  return (
    <Link
      href="/profile"
      className="border rounded-2xl px-3 text-[#c4cae9] text-sm"
    >
      프로필
    </Link>
  );
}
