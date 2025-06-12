"use client";

import { fetchGalleryName } from "@/app/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
  abbr: string;
}

export default function GalleryHeader({ abbr }: Props) {
  const galleryName = fetchGalleryName(abbr as string);
  const { id } = useParams();

  return (
    <div className="flex justify-between px-3 py-2 items-center border-b border-gray-300">
      <Link href={`/gallery/${abbr}`}>
        <h1 className="font-bold">{galleryName}</h1>
      </Link>
      {!id && (
        <Link href={`/write/${abbr}`}>
          <button className="text-sm text-blue-800 border border-blue-800 font-bold p-1">
            글쓰기
          </button>
        </Link>
      )}
    </div>
  );
}
