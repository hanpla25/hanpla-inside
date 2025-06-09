import GalleryHeader from "@/app/ui/gallery/gallery-header";
import GalleryPostList from "@/app/ui/gallery/gallery-post-list";
import GalleryTap from "@/app/ui/gallery/gallery-tap";

export default function GalleryPage() {
  return (
    <div>
      <GalleryHeader />
      <GalleryTap />
      <GalleryPostList />
    </div>
  );
}
