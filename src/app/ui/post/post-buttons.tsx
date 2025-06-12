import Link from "next/link";

interface Props {
  abbr: string;
}

export default function PostButtons({ abbr }: Props) {
  const buttonStyle = `w-full py-0.5 border border-gray-300`;
  return (
    <div className="px-2 py-4 flex space-x-1.5">
      <Link href={`/gallery/${abbr}`}>
        <button className={buttonStyle}>목록보기</button>
      </Link>
      <Link href={`/write/${abbr}`}>
        <button className="bg-[#3b4890] text-white w-full py-0.5 border border-gray-300">
          글쓰기
        </button>
      </Link>
      <Link href={`/write/${abbr}`}>
        <button className={buttonStyle}>수정</button>
      </Link>
      <Link href={"#"}>
        <button className={buttonStyle}>삭제</button>
      </Link>
    </div>
  );
}
