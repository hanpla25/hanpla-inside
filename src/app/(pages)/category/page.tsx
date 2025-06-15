import { fetchGalleries } from "@/app/lib/data";
import CategoryHeader from "@/app/ui/category/category-header";
import CategoryList from "@/app/ui/category/category-list";

export default async function CategoryPage() {
  const categoryData = await fetchGalleries();
  
  return (
    <div>
      <CategoryHeader />
      <CategoryList categoryData={categoryData} />
    </div>
  );
}
