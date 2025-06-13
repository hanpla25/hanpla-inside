"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderForm from "./header-form";
import RecentVisitModal from "../recent-visit/recent-visit-modal";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRecentGalleries } from "@/app/hooks/useRecentGalleries";

export default function Header() {
  const { abbr } = useParams();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { items, setItems } = useRecentGalleries(abbr as string);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="flex bg-[#29367c] py-2 px-2">
        <Link href={"/"}>
          <Image
            src={"/1748918753080_1.png"}
            alt="로고"
            width={36}
            height={36}
          />
        </Link>

        <HeaderForm setIsOpen={setIsOpen} />
      </header>

      {isOpen && (
        <RecentVisitModal
          items={items}
          setIsOpen={setIsOpen}
          setItems={setItems}
        />
      )}
    </>
  );
}
