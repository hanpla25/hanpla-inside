export default function PostButtons() {
  const buttonStyle = `w-full py-0.5 border border-gray-300`;
  return (
    <div className="px-2 py-4 flex space-x-1.5">
      <button className={buttonStyle}>목록보기</button>
      <button className="bg-[#3b4890] text-white w-full py-0.5 border border-gray-300">
        글쓰기
      </button>
      <button className={buttonStyle}>수정</button>
      <button className={buttonStyle}>삭제</button>
    </div>
  );
}
