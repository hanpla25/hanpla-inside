import { fetchPostList } from "@/app/lib/data";
import GalleryHeader from "@/app/ui/gallery/gallery-header";
import GalleryPostList from "@/app/ui/gallery/gallery-post-list";
import GalleryTap from "@/app/ui/gallery/gallery-tap";

type Params = Promise<{ abbr: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function GalleryPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const abbr = params.abbr;
  const recomend =
    typeof searchParams.recomend === "string"
      ? searchParams.recomend
      : undefined;
  const writingPage = false;

  const list = fetchPostList(abbr);

  return (
    <div>
      <GalleryHeader abbr={abbr} writingPage={writingPage} />
      <GalleryTap />
      <GalleryPostList abbr={abbr} recomend={recomend} list={list} />
    </div>
  );
}
