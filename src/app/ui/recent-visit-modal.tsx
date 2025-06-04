import Image from "next/image";
import { useState } from "react";
import { createTouchSwipeHandlers } from "../lib/utils";
import { useRecentVisitStore } from "../store/useRecentVisitStore";
import { placeholderRecentGalleryList } from "../lib/placeholder-data";

export default function RecentVisitModal() {
  const recentGalleryList: RecentGallery[] = placeholderRecentGalleryList;
  const ITEM_PER_PAGE: number = 6;

  const { isOpen, close } = useRecentVisitStore();
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages: number = Math.ceil(
    recentGalleryList.length / ITEM_PER_PAGE
  );
  const displayItems: RecentGallery[] = recentGalleryList.slice(
    currentPage * ITEM_PER_PAGE,
    (currentPage + 1) * ITEM_PER_PAGE
  );

  const touchHandlers = createTouchSwipeHandlers({
    onSwipeLeft: () =>
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1)),
    onSwipeRight: () => setCurrentPage((prev) => Math.max(prev - 1, 0)),
  });

  if (!isOpen) return null;

  if (recentGalleryList.length === 0) {
    return (
      <div className="bg-white border border-gray-300 rounded shadow-lg z-10 w-full max-w-7xl">
        <p className="text-center py-13 text-sm font-light">
          최근 방문한 갤러리가 없습니다.
        </p>
        <div className="flex justify-end py-2 px-2 bg-[#f9fafc]">
          <button onClick={close}>닫기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-300 rounded shadow-lg z-10 w-full max-w-7xl">
      <ul
        className="grid grid-cols-2 grid-rows-3 gap-2 text-sm text-gray-700"
        {...touchHandlers}
      >
        {/* 리스트 */}
        {displayItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-gray-300 p-2 truncate"
          >
            <span className="truncate">{item?.name}</span>
            <Image src="/x_button.png" alt="삭제" width={16} height={16} />
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center py-2 px-2 bg-[#f9fafc]">
        {/* 페이지 버튼 */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentPage ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* 닫기 버튼 */}
        <button onClick={close}>닫기</button>
      </div>
    </div>
  );
}
