import { TextInput } from "flowbite-react";
import type { SearchBarProps } from "./SearchBar.types";

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <TextInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Search..."}
      />
      {value && (
        <button
          className="absolute top-1/5 right-5 text-gray-400 hover:text-gray-300"
          onClick={() => onChange("")}
        >
          <span color="gray" className="text-xs">
            CLEAR
          </span>
        </button>
      )}
    </div>
  );
}
