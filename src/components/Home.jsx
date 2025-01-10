import React, { useEffect, useState } from "react";

import { SignIn, SignUp } from "../components";
import { LocalStorage, requestHandler } from "../utils";
import { loginUser } from "../api";
import { useAuth } from "../context/AuthContext";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    useEffect(() => {
        // (async () => {
        //     await login({ username: "zoro", password: "sword" });
        // })();
    }, []);
    return <div>Home</div>;
}

export default Home;
