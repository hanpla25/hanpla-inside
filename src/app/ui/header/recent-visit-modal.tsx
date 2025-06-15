import { useEffect, useState } from "react";
import RecentVisitItem from "./recent-visit-item";
import RecentVisitPageDots from "./recent-visit-page-dots";
import { ModalCloseButton } from "./buttons";
import { getRecentGalleries, useSwipeableControl } from "@/app/lib/utils";
import { RecentGallery } from "@/app/lib/types";

type RecentVisitModalProps = {
  onCloseModal: () => void;
};

const ITEMS_PER_PAGE = 6;

export default function RecentVisitModal({
  onCloseModal,
}: RecentVisitModalProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [allItems, setAllItems] = useState<RecentGallery[]>([]);

  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);
  const pageItems = allItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setAllItems(getRecentGalleries());
  }, []);

  const swipeHandlers = useSwipeableControl({
    onSwipeLeft: () => {
      if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
    },
    onSwipeRight: () => {
      if (currentPage > 0) setCurrentPage((p) => p - 1);
    },
  });

  if (allItems.length === 0) {
    return (
      <div className="bg-white border border-gray-300 rounded shadow-lg z-10 w-full max-w-7xl">
        <p className="text-center py-13 text-sm font-light">
          최근 방문한 갤러리가 없습니다.
        </p>
        <div className="flex justify-end py-2 px-2 bg-[#f9fafc]">
          <ModalCloseButton onClick={onCloseModal} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-300 rounded shadow-lg z-10 w-full max-w-7xl">
      <ul
        {...swipeHandlers}
        className="grid grid-cols-2 grid-rows-3 gap-2 text-sm text-gray-700"
      >
        {pageItems.map((item, index) => (
          <RecentVisitItem item={item} key={index} />
        ))}
      </ul>

      <div className="flex justify-between items-center py-2 px-2 bg-[#f9fafc]">
        <RecentVisitPageDots
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={setCurrentPage}
        />
        <ModalCloseButton onClick={onCloseModal} />
      </div>
    </div>
  );
}
