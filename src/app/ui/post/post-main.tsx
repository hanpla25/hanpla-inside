import SeparatorDot from "../separator-bar";
import { formatDateTime } from "@/app/lib/utils";
import PostButtons from "./post-buttons";
import PostLikeButton from "./post-likeButton";

interface Props {
  post: PostMain | undefined;
}

export default function PostMain({ post }: Props) {
  if (!post)
    return <div className="py-30 text-center">게시글을 찾을 수 없습니다</div>;

  return (
    <div className="">
      <header className="px-2 py-2 space-y-1 border-y border-gray-200">
        <h1 className="font-bold">{post.title}</h1>
        <div className="text-xs text-gray-800">
          <span className="mr-2">{post.nickname}</span>
          <SeparatorDot />
          <span className="ml-2">
            {formatDateTime(post.created_at, "full")}
          </span>
        </div>
      </header>

      <div className="text-xs text-gray-800 px-2 py-2">
        <span>조회수 {post.view}</span>
        <SeparatorDot />
        <span>추천 {post.likes}</span>
        <SeparatorDot />
        <span className="bg-gray-200 rounded-2xl px-2 py-0.5">
          댓글 <span className="text-red-500">{post.comment_count}</span>
        </span>
      </div>

      <main className="px-2">
        <p>{post.content}</p>
        <PostLikeButton post={post} />
      </main>

      <PostButtons />
    </div>
  );
}
