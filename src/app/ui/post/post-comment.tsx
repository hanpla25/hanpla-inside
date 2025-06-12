import PostCommentList from "./post-comment-list";
import PostCommentHeader from "./post-cooment-header";

interface Props {
  post: PostMain | undefined;
}

export default function PostComment({ post }: Props) {
  return (
    <div>
      <PostCommentHeader post={post} />
      <PostCommentList />
      <PostCommentHeader post={post} />
    </div>
  );
}
