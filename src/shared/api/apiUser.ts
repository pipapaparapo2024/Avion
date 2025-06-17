import axios from "axios";
import { useUserStore } from "../../entities/user/useUserSlice";
const api = axios.create({ baseURL: "http://82.147.85.20:8080/api" });

api.interceptors.request.use((config) => {
    const isAuthRequest =
    config.url?.includes("/auth/register") ||
    config.url?.includes("/auth/login");

  if (!isAuthRequest) {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

const logout = useUserStore.getState().logout;

api.interceptors.response.use(

  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
