import { UserPayload } from "@/app/lib/types";
import { ProfileLogoutButton } from "./buttons";

type Props = {
  user: UserPayload;
};

export default function ProfileBox({ user }: Props) {
  console.log(user);
  return (
    <div className="w-full p-4">
      <div>
        <div className="flex justify-between items-center">
          <span className="text-[#3b4890] font-semibold">
            {user.user_name}님
          </span>
          <ProfileLogoutButton />
        </div>
        <div className="flex items-center space-x-4 text-xs mt-3">
          <span>글 0</span>
          <span>댓글 0</span>
        </div>
      </div>
    </div>
  );
}
