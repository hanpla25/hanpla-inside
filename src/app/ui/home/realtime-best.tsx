import Link from "next/link";
import RealtimeBestList from "./realtime-best-list";
import { Post } from "@/app/lib/types";

type Props = {
  realtimeBestData: Post[];
};

export default function RealtimeBest({ realtimeBestData }: Props) {
  return (
    <header>
      <h1 className="p-2 bg-gray-100 text-sm font-extrabold">
        <Link href={"/gallery/realtimebest"}>실시간 베스트</Link>
      </h1>
      <RealtimeBestList realtimeBestData={realtimeBestData} />
    </header>
  );
}
