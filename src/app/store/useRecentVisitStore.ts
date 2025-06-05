import { create } from "zustand";
import { placeholderRecentGalleryList } from "../lib/placeholder-data";

interface RecentVisitState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  ITEM_PER_PAGE: number;
  recentGalleryList: RecentGallery[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: () => number;
  displayItems: () => RecentGallery[];
}

export const useRecentVisitStore = create<RecentVisitState>((set, get) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  ITEM_PER_PAGE: 6,
  recentGalleryList: placeholderRecentGalleryList,
  currentPage: 0,
  setCurrentPage: (page) => set({ currentPage: page }),
  totalPages: () => {
    const { recentGalleryList, ITEM_PER_PAGE } = get();
    return Math.ceil(recentGalleryList.length / ITEM_PER_PAGE);
  },
  displayItems: () => {
    const { recentGalleryList, ITEM_PER_PAGE, currentPage } = get();
    return recentGalleryList.slice(
      currentPage * ITEM_PER_PAGE,
      (currentPage + 1) * ITEM_PER_PAGE
    );
  },
}));
