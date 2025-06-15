type Props = {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

export default function RecentVisitPageDots({
  currentPage,
  totalPages,
  onChangePage,
}: Props) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChangePage(index)}
          className={`w-2 h-2 rounded-full ${
            index === currentPage ? "bg-gray-800" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
