import { RotateCw } from "lucide-react";

interface Props {
  post: PostMain | undefined;
}

export default function PostCommentHeader({ post }: Props) {
  return (
    <div className="flex gap-1 px-2 py-2 border-b-4 border-gray-300">
      <h2 className="font-bold">댓글</h2>
      <span className="text-red-700"> [{post?.comment_count}]</span>
      <button>
        <RotateCw size={16} color="#616161" strokeWidth={1.75} />
      </button>
    </div>
  );
}
