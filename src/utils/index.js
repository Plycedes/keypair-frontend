import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export class LocalStorage {
    static get(key) {
        const value = localStorage.getItem(key);
        if (value) {
            try {
                return JSON.parse(value);
            } catch (err) {
                return null;
            }
        }
        return null;
    }

    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static remove(key) {
        localStorage.removeItem(key);
    }

    static clear() {
        localStorage.clear();
    }
}

export const requestHandler = async (api, setLoading, onSuccess, onError) => {
    setLoading && setLoading(true);
    try {
        const response = await api();
        const { data } = response.data;
        if (response.data.success) {
            onSuccess(data);
        }
    } catch (error) {
        if ([401, 403].includes(error?.response.data?.statusCode)) {
            localStorage.clear();
            window.location.href = "/login";
        }
        onError(error?.response?.data?.message || "Something went wrong");
    } finally {
        setLoading && setLoading(false);
    }
};

export class Toast {
    static success(message) {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    static failure(message) {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
}
