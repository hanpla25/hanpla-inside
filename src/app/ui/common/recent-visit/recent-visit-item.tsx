import { RecentGallery } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  item: RecentGallery;
  onDelete: () => void;
}

export default function RecentVisitItem({ item, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between border-b border-gray-300 p-2 truncate">
      <Link href={item.link} className="truncate flex-1">
        <span>{item.name}</span>
      </Link>
      <button onClick={() => onDelete()}>
        <Image src="/x_button.png" alt="삭제" width={16} height={16} />
      </button>
    </li>
  );
}
