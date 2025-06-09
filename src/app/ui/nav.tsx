"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname: string = usePathname();
  const isActive: boolean =
    pathname.startsWith("/category") || pathname.startsWith("/gallery");

  return (
    <nav className="px-3 py-2 bg-[#3b4890]">
      <Link href={"/category"}>
        <span
          className={`font-bold ${isActive ? "text-yellow-300" : "text-white"}`}
        >
          갤러리
        </span>
      </Link>
    </nav>
  );
}
