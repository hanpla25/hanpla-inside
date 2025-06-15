import { Gallery } from "@/app/lib/types";
import CateogryItem from "./category-item";

type Props = {
  categoryData: Gallery[];
};

export default function CategoryList({ categoryData }: Props) {
  return (
    <ul className="grid grid-cols-2">
      {categoryData.map((item, i) => (
        <CateogryItem item={item} key={i} />
      ))}
    </ul>
  );
}
