import { bookService } from "../api/books.api";
import { BookResponse, BookRequest } from "../book.types";
import { useState, useEffect } from "react";

export function useBooks() {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await bookService.getBooks();
        setBooks(res.data);
      } catch (err) {
        console.error("Failed to fetch books", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const createBook = async (data: Omit<BookRequest, "isFavorite">) => {
    try {
      const newBook: BookResponse = {
        id: crypto.randomUUID(),
        ...data,
        isFavorite: false,
      };

      const res = await bookService.createBook(newBook);
      setBooks((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("failed to create book", err);
    }
  };

  const updateBook = async (updated: BookResponse) => {
    try {
      const { id, ...data } = updated;
      await bookService.updateBook(id, data);
      setBooks((prev) => prev.map((b) => (b.id === id ? updated : b)));
    } catch (err) {
      console.error("failed to update book", err);
    }
  };

  const removeBook = async (id: string) => {
    try {
      await bookService.deleteBook(id);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("failed to delete book", err);
    }
  };

  return { books, loading, createBook, updateBook, removeBook };
}
