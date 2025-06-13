import { createTouchSwipeHandlers } from "@/app/lib/utils";
import { useState } from "react";
import { ModalCloseButton } from "./recent-visit-button";
import PageDots from "./page-dots";
import RecentVisitItem from "./recent-visit-item";
import { RecentVisitModalProps } from "@/app/lib/types";

export default function RecentVisitModal({
  setIsOpen,
  items,
  setItems,
}: RecentVisitModalProps) {
  const ITEM_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(items.length / ITEM_PER_PAGE);

  const touchHandlers = createTouchSwipeHandlers({
    onSwipeLeft: () => setCurrentPage(Math.min(currentPage + 1, totalPage - 1)),
    onSwipeRight: () => setCurrentPage(Math.max(currentPage - 1, 0)),
  });

  const showItems = items.slice(
    currentPage * ITEM_PER_PAGE,
    (currentPage + 1) * ITEM_PER_PAGE
  );

  const handleDelete = (index: number) => {
    const itemIndex = currentPage * ITEM_PER_PAGE + index;
    const newItems = [...items];
    newItems.splice(itemIndex, 1);

    const updatedTotalPages = Math.ceil(newItems.length / ITEM_PER_PAGE);
    let newPage = currentPage;

    if (currentPage >= updatedTotalPages) {
      newPage = Math.max(updatedTotalPages - 1, 0);
    }

    setItems(newItems);
    setCurrentPage(newPage);
    localStorage.setItem("visit_gallery", JSON.stringify(newItems));
  };

  if (items.length === 0) {
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
        {showItems.map((item, index) => (
          <RecentVisitItem
            item={item}
            key={index}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>

      <div className="flex justify-between items-center py-2 px-2 bg-[#f9fafc]">
        <PageDots
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalCloseButton setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
