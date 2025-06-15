import Link from "next/link";

export default function CategoryHeader() {
  return (
    <div className="flex justify-between p-2 font-semibold border-b border-gray-300">
      <span className="text-xl ">전체 갤러리</span>
      <Link href="/create">
        <button className="text-sm border text-[#3b4890] border-[#3b4890] rounded-full px-3 py-1">
          갤러리 생성
        </button>
      </Link>
    </div>
  );
}
