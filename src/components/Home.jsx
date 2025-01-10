import React, { useEffect, useState } from "react";

import { SignIn, SignUp } from "../components";
import { LocalStorage, requestHandler } from "../utils";
import { loginUser } from "../api";
import { useAuth } from "../context/AuthContext";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const { logout } = useAuth();

    return (
        <div>
            <button
                type="button"
                className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
    rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-150 dark:hover:bg-primary-250 dark:focus:ring-primary-450"
                onClick={async () => await logout()}
            >
                Logout
            </button>
        </div>
    );
}

export default Home;
