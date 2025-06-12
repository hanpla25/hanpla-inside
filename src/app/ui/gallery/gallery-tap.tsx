"use client";

import { useRouter } from "next/navigation";
import SeparatorDot from "../separator-bar";
import Link from "next/link";
import { useState } from "react";

interface Props {
  abbr: string;
  recomend?: string | string[];
}

export default function GalleryTap({ abbr, recomend }: Props) {
  const router = useRouter();

  const isRecommend = recomend === "1";

  const [sizeValue, setSizeValue] = useState(10);

  const activeClass = "text-blue-700 font-semibold border-b-3 border-blue-700";

  const onChangeSize = (value: number) => {
    const params = new URLSearchParams();

    if (isRecommend) params.set("recomend", "1");
    params.set("size", value.toString());

    setSizeValue(value);
    router.push(`/gallery/${abbr}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between py-1">
      <Link
        href={`/gallery/${abbr}`}
        className={`flex-1 text-center ${!isRecommend ? activeClass : ""}`}
      >
        <button>전체</button>
      </Link>
      <SeparatorDot />
      <Link
        href={`/gallery/${abbr}?recomend=1`}
        className={`flex-1 text-center ${isRecommend ? activeClass : ""}`}
      >
        <button>개념글</button>
      </Link>
      <SeparatorDot />
      <select
        value={sizeValue}
        onChange={(e) => onChangeSize(Number(e.target.value))}
        className="flex-1 text-center"
      >
        <option value={10}>10개</option>
        <option value={20}>20개</option>
        <option value={30}>30개</option>
        <option value={50}>50개</option>
      </select>
    </div>
  );
}
