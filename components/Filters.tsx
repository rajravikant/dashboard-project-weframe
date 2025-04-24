import { cn } from "@/lib/utils";
import React from "react";

interface FilterOptionProps {
  options: FilterOption[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

type FilterOption = {
  label: string;
  count: number;
};

const Filters = ({
  options,
  selectedOption,
  setSelectedOption,
}: FilterOptionProps) => {
  return (
    <div className="flex space-x-2 flex-wrap lg:flex-none gap-3 lg:gap-0">
      {options.map((option, index) => (
        <button
          onClick={() => setSelectedOption(option.label)}
          key={index}
          className={cn(
            "px-4 py-2 rounded-lg bg-[#E7E8EF]  text-gray-700 font-semibold",
            selectedOption === option.label
              ? "bg-[#1c1442] text-white hover:bg-[#0f0c22]"
              : "hover:bg-[#e7e8ef]"
          )}
        >
          {option.label}{" "}
          <span className="text-[#A0A3BD]">({option.count})</span>
        </button>
      ))}
    </div>
  );
};

export default Filters;
