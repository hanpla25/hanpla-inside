interface Props {
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PageDots({
  totalPage,
  currentPage,
  setCurrentPage,
}: Props) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: totalPage }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-3 h-3 rounded-full ${
            i === currentPage ? "bg-blue-600" : "bg-gray-300"
          }`}
          aria-label={`페이지 ${i + 1}`}
        />
      ))}
    </div>
  );
}
