import { fetchGalleryName } from "@/app/lib/data";
import Link from "next/link";
import GalleryHeaderButton from "./gallery-header-button";

interface Props {
  abbr: string;
}

export default function GalleryHeader({ abbr }: Props) {
  const galleryName = fetchGalleryName(abbr as string);

  return (
    <div className="flex justify-between px-3 py-2 items-center border-b border-gray-300">
      <Link href={`/gallery/${abbr}`}>
        <h1 className="font-bold">{galleryName}</h1>
      </Link>
      <GalleryHeaderButton abbr={abbr} />
    </div>
  );
}
