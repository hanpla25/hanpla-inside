import { Tally1 } from "lucide-react";
import SearchForm from "./search-form";
import { RecentVisitButton } from "./buttons";

type SearchBoxProps = {
  onToggleModal: () => void;
};

export default function SearchBox({ onToggleModal }: SearchBoxProps) {
  return (
    <div className="flex items-center space-x-4 bg-white w-full px-2">
      <SearchForm />
      <Tally1 color="#828282" strokeWidth={0.5} className="m-0" />
      <RecentVisitButton onClick={onToggleModal} />
    </div>
  );
}
