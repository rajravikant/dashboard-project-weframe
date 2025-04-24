import { Search } from "lucide-react";
import React from "react";

function SearchBar({value, onChange}: {value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-[#a0a3bd]" />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2.5 shadow rounded-lg border border-[#e7e8ef] focus:outline-none focus:ring-1 focus:ring-[#9058ff]"
      />
    </div>
  );
}

export default SearchBar;
