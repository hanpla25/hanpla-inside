import { RecentGallery } from "@/app/lib/types";
import Link from "next/link";
import { ModalItemDeleteButton } from "./buttons";
import { removeRecentGallery } from "@/app/lib/utils";

type Props = {
  item: RecentGallery;
  setAllItems: React.Dispatch<React.SetStateAction<RecentGallery[]>>;
};

export default function RecentVisitItem({ item, setAllItems }: Props) {
  const handleDeleteModal = () => {
    const updatedItems = removeRecentGallery(item.abbr);
    setAllItems(updatedItems);
  };

  return (
    <li className="flex items-center justify-between border-b border-gray-300 p-2 truncate">
      <Link href={item.link} className="truncate flex-1">
        <span>{item.name}</span>
      </Link>
      <ModalItemDeleteButton onClick={handleDeleteModal} />
    </li>
  );
}
