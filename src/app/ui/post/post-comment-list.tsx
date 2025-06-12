import { placeholderCommentInfo } from "@/app/lib/placeholder-data";
import { formatDateTime } from "@/app/lib/utils";
import { CircleX } from "lucide-react";

export default function PostCommentList() {
  const comment = placeholderCommentInfo;
  return (
    <div>
      <ul className="border-b border-gray-300 py-2">
        <li className="px-2">
          <div className="flex justify-between">
            <span className="text-sm">
              {comment.nickname}
              {comment.ip_adress && ` (${comment.ip_adress})`}
            </span>
            <button>
              <CircleX size={20} color="#7a7a7a" strokeWidth={1.75} />
            </button>
          </div>
          <p className="text-sm mt-1">{comment.content}</p>
          <span className="text-xs text-gray-400">
            {formatDateTime(comment.created_at, "monthTime")}
          </span>
        </li>
      </ul>
    </div>
  );
}
