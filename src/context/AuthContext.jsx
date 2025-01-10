import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorage, requestHandler } from "../utils";
import { loginUser } from "../api";
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
            },
            alert
        );
    };

    return (
        <AuthContext.Provider value={{ user, token, login }}>
            {isLoading ? <Loader /> : children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider, useAuth };
