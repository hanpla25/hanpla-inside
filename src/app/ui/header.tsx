"use client";

import Image from "next/image";
import HeaderForm from "./header-form";
import Link from "next/link";
import RecentVisitModal from "./recent-visit-modal";
import { useRecentVisitStore } from "../store/useRecentVisitStore";

export default function Header() {
  const { isOpen } = useRecentVisitStore();

  return (
    <>
      <header className="flex bg-[#29367c] py-2 px-2">
        {/* 로고 */}
        <Link href={"/"} className="">
          <Image
            src={"/1748918753080_1.png"}
            alt="로고"
            width={36}
            height={36}
          />
        </Link>

        {/* 헤더 폼 */}
        <HeaderForm />
      </header>

      {/* 최근 방문 모달 */}
      {isOpen && <RecentVisitModal />}
    </>
  );
}
