import Image from "next/image";

interface Props {
  post: PostMain;
}

export default function PostLikeButton({ post }: Props) {
  return (
    <div className="flex gap-8 justify-center py-20">
      <button className="flex items-center gap-2">
        <span className="text-[#3b4890] font-bold">{post.likes}</span>
        <Image src={"/like_button.png"} alt="개추버튼" width={56} height={56} />
      </button>
      <button className="flex items-center gap-2">
        <Image
          src={"/dislike_button.png"}
          alt="비추버튼"
          width={56}
          height={56}
        />

        <span className="font-bold text-gray-600">{post.dislikes}</span>
      </button>
    </div>
  );
}
