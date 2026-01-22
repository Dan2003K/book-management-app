import { axiosInstance } from "../../../api/axiosInstance";
import { BookResponse, BookRequest } from "../book.types";

export const bookService = {
  getBooks: () => axiosInstance.get<BookResponse[]>("/books"),
  // Fetches all books

  createBook: (data: BookRequest) =>
    axiosInstance.post<BookResponse>("/books", data),
  // Creates a new book entry

  patchBook: (id: string, data: Partial<BookRequest>) =>
    axiosInstance.patch<BookResponse>(`/books/${id}`, data),
  // Partially updates book details by ID

  deleteBook: (id: string) => axiosInstance.delete<void>(`/books/${id}`),
  // Removes a book entry by ID
};
