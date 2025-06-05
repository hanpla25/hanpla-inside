import Image from "next/image";
import { createTouchSwipeHandlers } from "../lib/utils";
import { useRecentVisitStore } from "../store/useRecentVisitStore";

export default function RecentVisitModal() {
  const {
    isOpen,
    close,
    recentGalleryList,
    currentPage,
    setCurrentPage,
    totalPages,
    displayItems,
  } = useRecentVisitStore();

  if (!isOpen) return null;

  const total: number = totalPages();
  const items: RecentGallery[] = displayItems();

  const touchHandlers = createTouchSwipeHandlers({
    onSwipeLeft: () => setCurrentPage(Math.min(currentPage + 1, total - 1)),
    onSwipeRight: () => setCurrentPage(Math.max(currentPage - 1, 0)),
  });

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
        {items.map((item, index) => (
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
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentPage ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button onClick={close}>닫기</button>
      </div>
    </div>
  );
}
