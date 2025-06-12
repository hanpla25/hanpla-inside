import { fetchPostMain } from "@/app/lib/data";
import GalleryHeader from "@/app/ui/gallery/gallery-header";
import PostComment from "@/app/ui/post/post-comment";
import PostCommentForm from "@/app/ui/post/post-comment-form";
import PostMain from "@/app/ui/post/post-main";

type Params = Promise<{ abbr: string; id: string }>;

export default async function GalleryPostPage(props: { params: Params }) {
  const params = await props.params;
  const abbr = params.abbr;
  const postId = params.id;
  const writingPage = false;

  const post = fetchPostMain(postId);

  return (
    <div>
      <GalleryHeader abbr={abbr} writingPage={writingPage} />
      <PostMain post={post} />
      <PostComment post={post} />
      <PostCommentForm />
    </div>
  );
}
