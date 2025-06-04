import { useRecentVisitStore } from "../store/useRecentVisitStore";

export function RecentVisitButton() {
  const toggle = useRecentVisitStore((state) => state.toggle);

  return (
    <button className="text-sm font-medium text-gray-700" onClick={toggle}>
      최근 방문
    </button>
  );
}
