import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorage, requestHandler } from "../utils";
import { loginUser, registerUser, logoutUser } from "../api";
import { Loader } from "../components";

const AuthContext = createContext({
    user: null,
    token: null,
    login: async () => {},
    register: async () => {},
    logout: async () => {},
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    const login = async (username, password) => {
        await requestHandler(
            async () => await loginUser(username, password),
            setIsLoading,
            (data) => {
                setUser(data.user);
                setToken(data.accessToken);
                LocalStorage.set("user", data.user);
                LocalStorage.set("token", data.accessToken);
                navigate("/keypairs");
                console.log(data);
            },
            alert
        );
    };

    const register = async (data) => {
        await requestHandler(
            async () => await registerUser(data),
            setIsLoading,
            () => {
                alert("Account created successfully!");
                navigate("/signin");
            },
            alert
        );
    };

    const logout = async () => {
        await requestHandler(
            async () => await logoutUser(),
            setIsLoading,
            () => {
                setUser(null);
                setToken(null);
                LocalStorage.clear();
                navigate("/signin");
            },
            alert
        );
    };

    useEffect(() => {
        setIsLoading(true);
        const _token = LocalStorage.get("token");
        const _user = LocalStorage.get("user");
        if (_token && _user?._id) {
            setUser(_user);
            setToken(_token);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {isLoading ? <Loader /> : children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider, useAuth };
