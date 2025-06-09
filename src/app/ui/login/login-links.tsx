import Link from "next/link";

export default function LoginLinks() {
  return (
    <div className="text-sm mx-auto flex justify-center gap-2">
      <a href="#" className="">
        아이디 찾기
      </a>
      <span className="text-gray-400">|</span>
      <a href="#" className="">
        비밀번호 찾기
      </a>
      <span className="text-gray-400">|</span>
      <Link href={"/signup"} className="">
        회원가입
      </Link>
    </div>
  );
}
