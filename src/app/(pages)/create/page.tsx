import CreateGalleryForm from "@/app/ui/create/create-gallery-form";
import CreateGalleryHeader from "@/app/ui/create/create-gallery-header";

export default function CreatePage() {
  return (
    <div className="p-2">
      <CreateGalleryHeader />
      <CreateGalleryForm />
    </div>
  );
}
