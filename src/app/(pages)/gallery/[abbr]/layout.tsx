import { fetchGalleryName } from "@/app/lib/data";
import GalleryHeader from "@/app/ui/gallery/gallery-header";

type Params = Promise<{ abbr: string }>;

export default async function GalleryLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { abbr } = await params;
  const gallName = await fetchGalleryName(abbr);

  return (
    <div>
      <GalleryHeader gallName={gallName} />
      {children}
    </div>
  );
}
