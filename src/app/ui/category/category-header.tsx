import Link from "next/link";

export default function CategoryHeader() {
  return (
    <div className="flex justify-between items-center p-2 border border-t-0 border-gray-300">
      <h1 className="font-bold">전체 갤러리</h1>
      <Link href={"/create"}>
        <button className="text-sm border text-[#3b4890] border-[#3b4890] rounded-full px-2 py-1">
          갤러리 생성
        </button>
      </Link>
    </div>
  );
}
