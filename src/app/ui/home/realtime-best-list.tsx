"use client";

import Link from "next/link";
import SeparatorDot from "../separator-bar";

interface Props {
  bestPostList: BestPostList[];
}

export default function RealtimeBestList({ bestPostList }: Props) {
  if (bestPostList.length === 0) {
    return (
      <div className="flex justify-center items-center p-30">
        <h1>실시간 베스트 게시물이 없습니다.</h1>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {bestPostList.map((post, i) => (
          <li key={i} className="px-2 py-4">
            <Link
              href={`/gallery/${post.abbr}/${post.id}`}
              className="flex flex-col gap-2"
            >
              <div className="flex justify-between">
                <span className="truncate">{post.title}</span>
                <span className="text-red-600 font-light">
                  [{post.comment_count}]
                </span>
              </div>
              <div className="text-xs text-gray-600">
                <span>{post.galleryName}</span>
                <SeparatorDot />
                <span>{post.timestamp}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
