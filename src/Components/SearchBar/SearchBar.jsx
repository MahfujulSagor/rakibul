import { Search } from "lucide-react";

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search for public habits..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="outline outline-white border border-gray-200 rounded-md pl-12 h-14 text-lg"
      />
    </div>
  );
};
