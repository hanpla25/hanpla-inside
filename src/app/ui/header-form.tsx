import Image from "next/image";
import SeparatorDot from "./separator-bar";
import { RecentVisitButton } from "./buttons";

export default function HeaderForm() {
  return (
    <div className="flex items-center space-x-4 bg-white w-full px-2">
      {/* 폼 */}
      <form action="" className="flex items-center flex-1">
        <label htmlFor="searchGallery" className="sr-only">
          갤러리 검색
        </label>

        {/* 인풋 */}
        <input
          type="text"
          name="searchGallery"
          id="searchGallery"
          placeholder="갤러리 검색"
          className="py-1.5 text-sm focus:outline-none w-full"
        />

        {/* 검색 아이콘 */}
        <button
          type="submit"
          className="flex items-center justify-center"
          aria-label="검색"
        >
          <Image
            src={"/header_search.png"}
            alt="헤더 검색 아이콘"
            width={20}
            height={22}
          />
        </button>
      </form>

      {/* 분리 막대 */}
      <SeparatorDot />

      {/* 최근 방문 버튼 */}
      <RecentVisitButton />
    </div>
  );
}
