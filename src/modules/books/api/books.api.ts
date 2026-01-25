import { axiosInstance } from "../../../api/axiosInstance";
import { BookResponse, BookRequest } from "../book.types";

export const bookService = {
  getBooks: () => axiosInstance.get<BookResponse[]>("/books"),
  // Fetches all books

  createBook: (data: BookRequest) =>
    axiosInstance.post<BookResponse>("/books", data),
  // Creates a new book entry

  updateBook: (id: string, data: BookRequest) =>
    axiosInstance.put<BookResponse>(`/books/${id}`, data),
  // Updates book details by ID

  deleteBook: (id: string) => axiosInstance.delete<void>(`/books/${id}`),
  // Removes a book entry by ID
};
