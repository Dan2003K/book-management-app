import { TextInput } from "flowbite-react";
import type { SearchBarProps } from "./SearchBar.types";

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <TextInput
        className="select-none [&_input]:border-gray-600 [&_input]:bg-gray-700 [&_input]:text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Search..."}
        maxLength={75}
      />
      {value && (
        <button
          className="absolute top-1/2 right-1 -translate-y-1/2 text-gray-400 hover:text-gray-300"
          onClick={() => onChange("")}
        >
          <div color="gray" className="flex h-full bg-gray-800 px-4 py-2">
            <span className="text-xs">CLEAR</span>
          </div>
        </button>
      )}
    </div>
  );
}
