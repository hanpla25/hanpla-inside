import { fetchPostList } from "@/app/lib/data";
import GalleryButton from "@/app/ui/gallery/gallery-buttons";
import GalleryHeader from "@/app/ui/gallery/gallery-header";
import GalleryPostList from "@/app/ui/gallery/gallery-post-list";
import GallerySearchForm from "@/app/ui/gallery/gallery-search-form";

type Params = Promise<{ abbr: string }>;

export default async function GalleryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { abbr } = await params;
  const list = fetchPostList(abbr as string);

  return (
    <div>
      <GalleryHeader abbr={abbr} />
      {children}
      <GalleryPostList abbr={abbr} list={list} />
      <GalleryButton />
      <GallerySearchForm />
    </div>
  );
}
