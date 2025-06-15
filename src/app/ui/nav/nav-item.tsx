"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: { name: string; link: string };
};

export default function NavItem({ item }: Props) {
  const pathname = usePathname();

  const isActive = pathname === "/category" || pathname.startsWith("/gallery");

  return (
    <Link href={"/category"}>
      <li className={isActive ? "text-yellow-400 font-semibold" : ""}>
        {item.name}
      </li>
    </Link>
  );
}
