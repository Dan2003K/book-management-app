import { TextInput } from "flowbite-react";
import type { SearchBarProps } from "./SearchBar.types";

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <TextInput
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder ?? "Search..."}
    />
  );
}
