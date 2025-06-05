import RealtimeBestHeader from "./realtime-best-header";
import RealtimeBestList from "./realtime-best-list";

interface Props {
  bestPostList: BestPostList[];
}

export default function RealtimeBest({ bestPostList }: Props) {
  return (
    <div>
      <RealtimeBestHeader />
      <RealtimeBestList bestPostList={bestPostList} />
    </div>
  );
}
