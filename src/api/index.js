import axios from "axios";
import { LocalStorage } from "../utils";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_SERVER_BASE_URI,
    withCredentials: true,
    timeout: 120000,
});

apiClient.interceptors.request.use(
    function (config) {
        const token = LocalStorage.get("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const loginUser = (data) => {
    return apiClient.post("/users/login", data);
};
