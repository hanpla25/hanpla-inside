import { fetchPostMain } from "@/app/lib/data";
import SeparatorDot from "../separator-bar";
import { formatDateTime } from "@/app/lib/utils";
import PostComent from "./post-coment";

interface Props {
  postId: string;
}

export default function PostMain({ postId }: Props) {
  const post = fetchPostMain(postId as string);

  if (!post) return <div>게시글을 찾을 수 없습니다</div>;

  return (
    <div>
      <header>
        <h1>{post.title}</h1>
        <div>
          <span>{post.nickname}</span>
          <SeparatorDot />
          <span>{formatDateTime(post.created_at, "full")}</span>
        </div>
      </header>

      <main>
        <p>{post.content}</p>
        <div>
          <button>{post.likes}</button>
          <button>{post.dislikes}</button>
        </div>
      </main>

      <div>
        <button>목록보기</button>
        <button>글쓰기</button>
      </div>

      <div>
        <div>
          <h2>댓글 [{post.comment_count}]</h2>
          <button>새로고침</button>
        </div>

        <PostComent />
      </div>
    </div>
  );
}
