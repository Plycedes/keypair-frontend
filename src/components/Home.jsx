import React, { useEffect } from "react";

import { SignIn, SignUp } from "../components";
import { LocalStorage } from "./utils";
import { loginUser } from "./api";

function Home() {
    useEffect(() => {
        (async () => {
            try {
                const response = await loginUser("zoro", "sword");
                console.log(response);
            } catch (error) {
                console.error("Some error occured", error);
            }
        })();
    }, []);
    return (
        <div>
            <SignUp />
        </div>
    );
}

export default Home;
