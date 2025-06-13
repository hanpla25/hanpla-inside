import Image from "next/image";
import Separator from "../separator";
import { RecentVisitButton } from "../recent-visit/recent-visit-button";
import { ModalToggleProps } from "@/app/lib/types";

export default function HeaderForm({ setIsOpen }: ModalToggleProps) {
  return (
    <div className="flex items-center space-x-4 bg-white w-full px-2">
      <form action="" className="flex items-center flex-1">
        <label htmlFor="searchGallery" className="sr-only">
          갤러리 검색
        </label>

        <input
          type="text"
          name="searchGallery"
          id="searchGallery"
          placeholder="갤러리 검색"
          className="py-1.5 text-sm focus:outline-none w-full"
        />

        <button
          type="submit"
          className="flex items-center justify-center"
          aria-label="검색"
        >
          <Image
            src={"/header_search.png"}
            alt="헤더 검색 아이콘"
            width={20}
            height={22}
          />
        </button>
      </form>

      <Separator />

      <RecentVisitButton setIsOpen={setIsOpen} />
    </div>
  );
}
