import { fetchGalleryName } from "@/app/lib/data";
import RecentGallerySaver from "@/app/ui/header/recent-visit-saver";

type Params = Promise<{ abbr: string }>;

export default async function GalleryPage(props: { params: Params }) {
  const params = await props.params;
  const abbr = params.abbr;
  const gallName = await fetchGalleryName(abbr);

  const recentGalleryData = {
    abbr: abbr,
    name: gallName,
    link: `/gallery/${params.abbr}`,
  };

  return (
    <div>
      <RecentGallerySaver
        recentGalleryData={recentGalleryData}
        gallName={gallName}
      />
      asd
    </div>
  );
}
