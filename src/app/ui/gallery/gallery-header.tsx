"use client";

import { fetchGalleryName } from "@/app/lib/data";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function GalleryHeader() {
  const { abbr } = useParams();
  const pathname = usePathname();

  const galleryName = fetchGalleryName(abbr);

  const isWritePage = pathname.startsWith(`/gallery/${abbr}/write`);

  return (
    <div className="flex justify-between p-2">
      <Link href={`/gallery/${abbr}`}>
        <h1 className="font-bold">{galleryName} 갤러리</h1>
      </Link>
      {!isWritePage && (
        <Link href={`/gallery/${abbr}/write`}>
          <button className="text-sm text-blue-800 border border-blue-800 font-bold p-1">
            글쓰기
          </button>
        </Link>
      )}
    </div>
  );
}
