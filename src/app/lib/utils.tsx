interface TouchSwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

interface SwipeEventHandlers {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

export function createTouchSwipeHandlers({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: TouchSwipeHandlers): SwipeEventHandlers {
  const startYRef = { current: 0 };
  const startXRef = { current: 0 };
  const isTouchingRef = { current: false };
  const dragOffsetRef = { current: 0 };

  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouchingRef.current) return;

    const deltaX = e.touches[0].clientX - startXRef.current;
    const deltaY = e.touches[0].clientY - startYRef.current;

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      isTouchingRef.current = false;
      return;
    }

    dragOffsetRef.current = deltaX;
  };

  const handleTouchEnd = () => {
    if (!isTouchingRef.current) return;

    const offset = dragOffsetRef.current;
    if (offset < -threshold) {
      onSwipeLeft?.();
    } else if (offset > threshold) {
      onSwipeRight?.();
    }

    isTouchingRef.current = false;
    dragOffsetRef.current = 0;
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
}

export function formatDateTime(
  dateInput: string,
  type: "time" | "full"
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
  if (type === "full") return full;

  return full;
}
