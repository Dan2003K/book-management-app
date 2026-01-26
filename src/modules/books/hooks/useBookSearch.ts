import type { BookResponse } from "../book.types";
import { useState, useMemo } from "react";

export function useBookSearch(books: BookResponse[]) {
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const q = query.trim().toLowerCase();

    return books.filter((book) =>
      [book.title, book.author, book.description]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(q)),
    );
  }, [books, query]);

  const noResults = query.trim() && filteredBooks.length === 0;

  return { query, setQuery, filteredBooks, noResults };
}
