import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatify-2-jy2j.onrender.com/api",
  withCredentials: true,
});