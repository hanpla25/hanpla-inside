import { placeholderCategoryList } from "@/app/lib/placeholder-data";
import Link from "next/link";

export default function CategoryList() {
  const categoryList: CategoryList[] = placeholderCategoryList;

  if (categoryList.length === 0) {
    return (
      <div className="flex justify-center items-center p-30">
        아직 갤러리가 없습니다.
      </div>
    );
  }
  return (
    <div className="border border-gray-300 border-t-0">
      <ul className="grid grid-cols-2">
        {categoryList.map((gall, index) => (
          <li
            key={gall.id}
            className="border-b border-gray-300 last:border-b-0 p-2"
          >
            <Link href={`/gallery/${gall.abbr}`}>
              <div>{`${index + 1}. ${gall.name}`}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
