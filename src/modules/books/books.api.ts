import { axiosInstance } from "../../api/axiosInstance";
import { BookResponse, BookRequest } from "./api/book.types";

//// --- (API Layer For Books) --- ////
//-----------------------------------//
// -- GET: Retrieve all book records:
export const getBooks = () => axiosInstance.get<BookResponse[]>("/books");
//
//
// -- POST: Persist a new book record:
export const createBook = (data: BookRequest) =>
  axiosInstance.post<BookResponse>("/books", data);
//
//
// -- PATCH: Partially update specific book fields by ID:
export const patchBook = (id: string, data: Partial<BookRequest>) =>
  axiosInstance.patch<BookResponse>(`/books/${id}`, data);
//
//
// -- DELETE: Remove a book record by ID:
export const deleteBook = (id: string) =>
  axiosInstance.delete<void>(`/books/${id}`);
