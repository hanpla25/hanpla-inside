import GalleryHeader from "@/app/ui/gallery/gallery-header";
import WriteForm from "@/app/ui/write/write-form";

type Params = Promise<{ abbr: string }>;

export default async function GallertWrite(props: { params: Params }) {
  const params = await props.params;
  const { abbr } = params;
  const isWritingPage = true;
  return (
    <div>
      <GalleryHeader abbr={abbr} />
      <h1 className="p-2 border-b border-gray-300 font-bold">글쓰기</h1>
      <WriteForm />
    </div>
  );
}
