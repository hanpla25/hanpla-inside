import { fetchPostMain } from "@/app/lib/data";
import PostComment from "@/app/ui/post/post-comment";
import PostCommentForm from "@/app/ui/post/post-comment-form";
import PostMain from "@/app/ui/post/post-main";

type Params = Promise<{ id: string; abbr: string }>;

export default async function GalleryPostPage(props: { params: Params }) {
  const params = await props.params;
  const postId = params.id;
  const post = fetchPostMain(postId);
  const abbr = params.abbr;

  return (
    <div>
      <PostMain post={post} abbr={abbr} />
      <PostComment post={post} />
      <PostCommentForm />
    </div>
  );
}
