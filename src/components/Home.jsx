import React, { useEffect } from "react";

import { SignIn, SignUp } from "../components";
import { LocalStorage } from "./utils";

function Home() {
    useEffect(() => {
        LocalStorage.set("name", { name: "Abhay Pratap Yadav" });
        const data = LocalStorage.get("name");
        console.log(data.name);
        LocalStorage.clear();
    }, []);
    return (
        <div>
            <SignUp />
        </div>
    );
}

export default Home;
