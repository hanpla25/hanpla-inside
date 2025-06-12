import { fetchGalleryName } from "@/app/lib/data";
import Link from "next/link";

interface Props {
  abbr: string;
  writingPage: boolean;
}

export default function GalleryHeader({ abbr, writingPage }: Props) {
  const galleryName = fetchGalleryName(abbr as string);

  return (
    <div className="flex justify-between px-3 py-2 items-center">
      <Link href={`/gallery/${abbr}`}>
        <h1 className="font-bold">{galleryName}</h1>
      </Link>
      {!writingPage && (
        <Link href={`/gallery/${abbr}/write`}>
          <button className="text-sm text-blue-800 border border-blue-800 font-bold p-1">
            글쓰기
          </button>
        </Link>
      )}
    </div>
  );
}
