import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://695e82b72556fd22f678ae2e.mockapi.io/api",
  timeout: 10000,
});
