"use client";
import Link from "next/link";

export default function RealtimeBestHeader() {
  return (
    <header>
      <h1 className="p-2 bg-gray-100 text-sm font-extrabold">
        <Link href={"/gallery/realtimebest"}>실시간 베스트</Link>
      </h1>
    </header>
  );
}
