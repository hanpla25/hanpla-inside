"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
  const pathname = usePathname();

  const isActive = pathname === "/category" || pathname.startsWith("/gallery");

  return (
    <ul>
      <Link href={"/category"}>
        <li
          className={
            isActive ? "text-yellow-400 font-semibold" : "font-semibold"
          }
        >
          갤러리
        </li>
      </Link>
    </ul>
  );
}
