import { RecentGallery } from "@/app/lib/types";
import Link from "next/link";
import { ModalItemDeleteButton } from "./buttons";

type Props = {
  item: RecentGallery;
};

export default function RecentVisitItem({ item }: Props) {
  const tbd = () => {};
  
  return (
    <li className="flex items-center justify-between border-b border-gray-300 p-2 truncate">
      <Link href={item.link} className="truncate flex-1">
        <span>{item.name}</span>
      </Link>
      <ModalItemDeleteButton onClick={tbd} />
    </li>
  );
}
