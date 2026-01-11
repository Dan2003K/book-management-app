import axios from "axios";
import { bookRequest } from "../models/book";

const _axios = {
  baseURL: "https://695e82b72556fd22f678ae2e.mockapi.io/api",
  timeout: 10000,
};

export const apiService = axios.create(_axios);

// api requests
export const createBook = (data: bookRequest) =>
  apiService.post("/books", data);
export const getBooks = () => apiService.get("/books");
export const updateBook = (id: string, data: bookRequest) =>
  apiService.put(`/books/${id}`, data);
export const deleteBook = (id: string) => apiService.delete(`/books/${id}`);
