import GalleryHeader from "@/app/ui/gallery/gallery-header";

type Params = Promise<{ abbr: string }>;

export default async function WritePage(props: { params: Params }) {
  const params = await props.params;
  const abbr = params.abbr;
  
  const writingPage = true;

  return (
    <div>
      <GalleryHeader abbr={abbr} writingPage={writingPage} />
    </div>
  );
}
