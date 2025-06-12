import GalleryTap from "@/app/ui/gallery/gallery-tap";

type Params = Promise<{ abbr: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function GalleryPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const { abbr } = params;
  const recomend = searchParams.recomend;

  return (
    <div>
      <GalleryTap abbr={abbr} recomend={recomend} />
    </div>
  );
}
