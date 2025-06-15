import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";

export function LoginButton() {
  return (
    <button className="flex justify-center items-center mt-4 w-full text-gray-900 cursor-pointer bg-gray-300 rounded-md py-[9px] disabled:opacity-50 disabled:cursor-not-allowed">
      로그인
      <LogIn size={16} className="text-gray-900 ml-1.5" />
    </button>
  );
}

export function SignUpLink() {
  return (
    <Link
      href={"/signup"}
      className="flex justify-center items-center mt-4 w-full text-gray-900"
    >
      회원가입
      <UserPlus size={16} color="#404040" className="ml-1.5" />
    </Link>
  );
}
