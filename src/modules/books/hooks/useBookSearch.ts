import type { BookResponse } from "../book.types";
import { useState, useMemo } from "react";

export function useBookSearch(books: BookResponse[]) {
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const q = query.trim().toLowerCase();

    return books.filter((book) =>
      Object.values(book).some((value) =>
        String(value).toLowerCase().includes(q),
      ),
    );
  }, [books, query]);

  const noResults = query.trim() && filteredBooks.length === 0;

  return { query, setQuery, filteredBooks, noResults };
}
