import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatify-2-jy2j.onrender.com//api" : "/api",
  withCredentials: true,
});