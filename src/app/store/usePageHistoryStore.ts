import { create } from "zustand";

interface PreviousPageState {
  previousUrl: string;
  setPreviousUrl: (url: string) => void;
}

export const usePreviousPageStore = create<PreviousPageState>((set) => ({
  previousUrl: "/",
  setPreviousUrl: (url: string) => set({ previousUrl: url }),
}));
