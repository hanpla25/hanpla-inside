"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  abbr: string;
}

export default function GalleryHeaderButton({ abbr }: Props) {
  const pathname = usePathname();

  if (pathname.startsWith("/write")) return null;

  return (
    <Link href={`/write/${abbr}`}>
      <button className="text-sm text-blue-800 border border-blue-800 font-bold p-1">
        글쓰기
      </button>
    </Link>
  );
}
