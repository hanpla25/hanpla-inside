import Link from "next/link";
import SeparatorDot from "../separator-bar";
import { formatDateTime } from "@/app/lib/utils";

interface Props {
  abbr: string;
  recomend?: string;
  list: PostList[];
}

export default function GalleryPostList({ abbr, recomend, list }: Props) {
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
                <span>{item.nickname}</span>
                {item.ip_adress ? `(${item.ip_adress})` : null}
                <SeparatorDot />
                {formatDateTime(item.created_at, "time")}
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
