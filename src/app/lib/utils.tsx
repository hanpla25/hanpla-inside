import { useSwipeable } from "react-swipeable";
import { RecentGallery } from "./types";

type SwipeDirection = "left" | "right" | "up" | "down";

type UseSwipeableControlProps = {
  onSwipe?: (direction: SwipeDirection) => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  delta?: number;
};

export function useSwipeableControl({
  onSwipe,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  delta = 30,
}: UseSwipeableControlProps) {
  return useSwipeable({
    onSwipedLeft: () => {
      onSwipe?.("left");
      onSwipeLeft?.();
    },
    onSwipedRight: () => {
      onSwipe?.("right");
      onSwipeRight?.();
    },
    onSwipedUp: () => {
      onSwipe?.("up");
      onSwipeUp?.();
    },
    onSwipedDown: () => {
      onSwipe?.("down");
      onSwipeDown?.();
    },
    delta,
    trackTouch: true,
    trackMouse: false,
  });
}

export function formatDateTime(
  dateInput: string,
  type: "time" | "full" | "monthTime"
): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  const now = new Date();

  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  const pad = (n: number) => String(n).padStart(2, "0");

  const time = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  const dayMonth = `${pad(date.getMonth() + 1)}.${pad(date.getDate())}`;
  const full = `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(
    date.getDate()
  )} ${time}`;

  if (type === "time") {
    return isToday ? time : dayMonth;
  }

  if (type === "monthTime") {
    return `${dayMonth} ${time}`;
  }

  if (type === "full") return full;

  return full;
}

const STORAGE_KEY = "visit_galleries";

export function getRecentGalleries(): RecentGallery[] {
  function isRecentGallery(obj: any): obj is RecentGallery {
    return (
      typeof obj === "object" &&
      obj !== null &&
      typeof obj.abbr === "string" &&
      typeof obj.name === "string" &&
      typeof obj.link === "string"
    );
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isRecentGallery);
  } catch (error) {
    console.error("visit_galleries parse error:", error);
    return [];
  }
}

export function setRecentGalleries(newItem: RecentGallery) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    let items: RecentGallery[] = [];

    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        items = parsed;
      }
    }

    items = items.filter((item) => item.abbr !== newItem.abbr);

    const newItems = [newItem, ...items];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));

    return newItems;
  } catch (error) {
    console.error("최근 방문 갤러리 저장 오류:", error);
    return [];
  }
}
