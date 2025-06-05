import { placeholderCategoryList } from "@/app/lib/placeholder-data";
import CategoryHeader from "@/app/ui/category/category-header";
import CategoryList from "@/app/ui/category/category-list";

export default function CategoryPage() {
  const categoryList: CategoryList[] = placeholderCategoryList;

  return (
    <div>
      <CategoryHeader />
      <CategoryList categoryList={categoryList} />
    </div>
  );
}
