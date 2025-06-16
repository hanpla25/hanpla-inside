"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LoginButton() {
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
