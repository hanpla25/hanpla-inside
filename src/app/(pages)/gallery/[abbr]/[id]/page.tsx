import GalleryHeader from "@/app/ui/gallery/gallery-header";
import PostMain from "@/app/ui/post/post-main";

type Params = Promise<{ abbr: string; id: string }>;

export default async function GalleryPostPage(props: { params: Params }) {
  const params = await props.params;
  const abbr = params.abbr;
  const postId = params.id;
  const writingPage = false;

  return (
    <div>
      <GalleryHeader abbr={abbr} writingPage={writingPage} />
      <PostMain postId={postId} />
    </div>
  );
}
