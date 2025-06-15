import Image from "next/image";

export function RecentVisitButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-sm font-medium text-gray-700">
      최근 방문
    </button>
  );
}

export function ModalCloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-300 text-sm font-bold px-1.5 py-0.5 text-gray-700"
    >
      닫기
    </button>
  );
}

export function ModalItemDeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}>
      <Image src="/x_button.png" alt="삭제" width={16} height={16} />
    </button>
  );
}
