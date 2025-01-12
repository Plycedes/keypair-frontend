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

export const registerUser = (data) => {
    return apiClient.post("/users/register", data);
};

export const logoutUser = () => {
    return apiClient.post("/users/logout");
};

export const changeUserPassword = (data) => {
    return apiClient.post("/users/change-password", data);
};

// Category routes

export const getAllCategories = () => {
    return apiClient.get("categories/get-all-categories");
};

export const createCategory = (title) => {
    return apiClient.post("/categories/create-category", title);
};

export const deleteCategory = (data) => {
    return apiClient.post("/categories/delete-category", data);
};

export const editCategory = (data) => {
    return apiClient.post("/categories/edit-category", data);
};

// KeyPair routes

export const getAllKeyPairs = (data) => {
    return apiClient.post("keypair/get-all-keypairs", data);
};

export const createKeyPair = (data) => {
    return apiClient.post("keypair/create-keypair", data);
};

export const editKeyPair = (data) => {
    return apiClient.post("keypair/edit-keypair", data);
};

export const deleteKeyPair = (data) => {
    return apiClient.post("keypair/delete-keypair", data);
};
