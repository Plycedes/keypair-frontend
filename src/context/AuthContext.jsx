import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
};
