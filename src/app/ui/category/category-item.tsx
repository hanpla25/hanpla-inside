import { Gallery } from "@/app/lib/types";
import Link from "next/link";

type Props = {
  item: Gallery;
};

export default function CateogryItem({ item }: Props) {
  return (
    <Link
      href={`/gallery/${item.abbr}`}
      className="p-3 border-b border-gray-300"
    >
      <li>{item.gall_name}</li>
    </Link>
  );
}
