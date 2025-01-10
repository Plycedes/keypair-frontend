import React, { useEffect, useState } from "react";

import { SignIn, SignUp } from "../components";
import { LocalStorage, requestHandler } from "./utils";
import { loginUser } from "./api";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        (async () => {
            await requestHandler(
                async () => await loginUser("zoro", "sword"),
                setIsLoading,
                (res) => {
                    console.log(res);
                }
            );
        })();
    }, []);
    return (
        <div>
            <SignUp />
        </div>
    );
}

export default Home;
