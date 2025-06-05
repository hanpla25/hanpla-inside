import { placeholderBestPost } from "../lib/placeholder-data";
import RealtimeBest from "../ui/home/realtime-best";

export default function Home() {
  const bestPostList: BestPostList[] = placeholderBestPost;
  return (
    <div>
      <RealtimeBest bestPostList={bestPostList} />
    </div>
  );
}
