import Image from "next/image";

export default function SearchForm() {
  return (
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
  );
}
