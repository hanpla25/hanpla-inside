export default function GallerySearchForm() {
  return (
    <div className="p-2 border-y border-gray-400 bg-gray-100 flex">
      <label htmlFor="search" className="sr-only">
        검색
      </label>
      <select className="border border-gray-500 p-1">
        <option value="title_content">제목+내용</option>
        <option value="title">제목</option>
        <option value="author">글쓴이</option>
      </select>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        className="w-full p-1 border border-gray-500 border-l-0"
      />
    </div>
  );
}
