import Link from "next/link";
import { fetchRealtimePosts, getUserFromToken } from "../lib/data";
import ProfileBox from "../ui/home/profile-box";
import RealtimeBest from "../ui/home/realtime-best";
import LoginForm from "../ui/login/login-form";

export default async function Home() {
  const realtimeBestData = await fetchRealtimePosts();
  const user = await getUserFromToken();

  return (
    <div>
      <h1 className="p-2 bg-gray-100 text-sm font-extrabold mb-4">
        <Link href={"/gallery/realtimebest"}>실시간 베스트</Link>
      </h1>
      <div className="flex gap-2">
        <div className="w-[728px]">
          <RealtimeBest realtimeBestData={realtimeBestData} />
        </div>
        <div className="flex-1">
          {user ? (
            <div className="hidden lg:block border-blue-950 border ">
              <ProfileBox user={user} />
            </div>
          ) : (
            <div className="hidden lg:block border-blue-950 border">
              <LoginForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
