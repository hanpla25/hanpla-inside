import { fetchRealtimePosts } from "../lib/data";
import RealtimeBest from "../ui/home/realtime-best";

export default async function Home() {
  const realtimeBestData = await fetchRealtimePosts();

  return (
    <div>
      <RealtimeBest realtimeBestData={realtimeBestData} />
    </div>
  );
}
