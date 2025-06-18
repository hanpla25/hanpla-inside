import RealtimeBestList from "./realtime-best-list";
import { Post } from "@/app/lib/types";

type Props = {
  realtimeBestData: Post[];
};

export default function RealtimeBest({ realtimeBestData }: Props) {
  return (
    <div className="w-full">
      <RealtimeBestList realtimeBestData={realtimeBestData} />
    </div>
  );
}
