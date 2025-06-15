"use client";

import { useEffect, useState } from "react";
import Logo from "./logo";
import RecentVisitModal from "./recent-visit-modal";
import SearchBox from "./search-box";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="flex bg-[#29367c] py-2 px-2">
        <Logo />
        <SearchBox onToggleModal={() => setIsModalOpen((prev) => !prev)} />
      </header>
      {isModalOpen && (
        <RecentVisitModal onCloseModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
