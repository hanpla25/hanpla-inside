import { ModalToggleProps } from "@/app/lib/types";

export function RecentVisitButton({ setIsOpen }: ModalToggleProps) {
  return (
    <button
      className="text-sm font-medium text-gray-700"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      최근 방문
    </button>
  );
}

export function ModalCloseButton({ setIsOpen }: ModalToggleProps) {
  return (
    <button
      className="bg-white border border-gray-300 text-sm font-bold px-1.5 py-0.5 text-gray-700"
      onClick={() => setIsOpen(false)}
    >
      닫기
    </button>
  );
}
