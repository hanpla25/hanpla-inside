import { WriteButton } from "./gallery-buttons";

export default function GalleryHeader({ gallName }: { gallName: string }) {
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="font-semibold">{gallName}</div>
      <WriteButton />
    </div>
  );
}
