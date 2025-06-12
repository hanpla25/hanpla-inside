"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname: string = usePathname();

  return (
    <footer className="bg-[#3b4890] flex justify-center py-4 max-w-7xl mx-auto pt-20">
      <div className="w-11/12 flex justify-between gap-2">
        <Link
          href={`/login?callbackUrl=${encodeURIComponent(pathname)}`}
          className="w-full mx-2 py-2 border border-gray-400 text-white rounded-md font-medium text-center max-w-7xl"
        >
          로그인
        </Link>
      </div>
    </footer>
  );
}
