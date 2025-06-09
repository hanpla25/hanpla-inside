"use client";
import { fetchPostList } from "@/app/lib/data";
import Link from "next/link";
import SeparatorDot from "../separator-bar";
import { useParams, useSearchParams } from "next/navigation";

export default function GalleryPostList() {
  const { abbr } = useParams();
  const searchParams = useSearchParams();

  const recomend = searchParams.get("recomend");
  const list = fetchPostList();

  return (
    <ul>
      {list.map((item) => {
        const href =
          recomend === "1"
            ? `/gallery/${abbr}/${item.id}?recomend=1`
            : `/gallery/${abbr}/${item.id}`;

        return (
          <Link key={item.id} href={href}>
            <li className="p-2 border-b border-gray-400">
              <div>{item.title}</div>
              <div className="text-xs text-gray-600">
                <span>
                  {item.nickname}
                  {item.ip_adress ? `(${item.ip_adress})` : null}
                </span>
                <SeparatorDot />
                <span>{item.created_at}</span>
                <SeparatorDot />
                <span>조회수 {item.view}</span>
                <SeparatorDot />
                <span>추천 {item.likes}</span>
                <SeparatorDot />
                <span>댓글 {item.comment_count}</span>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
