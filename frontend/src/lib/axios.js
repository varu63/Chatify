import axios from "axios";

export const axiosInstance = axios.create({
  // Use a relative path so it works on localhost AND in production
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:3000/api" 
    : "/api",
  withCredentials: true,
});