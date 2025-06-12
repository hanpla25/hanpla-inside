import Link from "next/link";

export default function GalleryButton({ abbr }: { abbr: string }) {
  return (
    <div className="flex p-2 space-x-2">
      <Link
        href={`/gallery/${abbr}?recomend=1`}
        className="w-full border border-gray-400 py-0.5 text-center"
      >
        개념글보기
      </Link>
      <Link
        href={`/write/${abbr}`}
        className="w-full bg-[#394890] text-white py-0.5 text-center"
      >
        글쓰기
      </Link>
    </div>
  );
}
