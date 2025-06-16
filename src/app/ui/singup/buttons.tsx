import { UserPlus } from "lucide-react";

type Props = {
  isPending: boolean;
};

export function SignUpButton({ isPending }: Props) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="flex justify-center items-center mt-4 w-full text-gray-900 cursor-pointer bg-gray-300 rounded-md py-[9px] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isPending ? "가입중" : "회원가입"}
      <UserPlus size={16} color="#404040" className="ml-1.5" />
    </button>
  );
}
