import Link from "next/link";
import React from "react";

export default function LoginButton() {
  return (
    <Link
      href={"/login"}
      className="border rounded-2xl px-3 text-[#c4cae9] text-sm"
    >
      로그인
    </Link>
  );
}
