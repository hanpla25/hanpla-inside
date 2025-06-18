import { logout } from "@/app/lib/action";

export function ProfileLogoutButton() {
  return (
    <form action={logout}>
      <button className="p-2 bg-[#3b4890] text-white text-xs font-semibold">
        로그아웃
      </button>
    </form>
  );
}
