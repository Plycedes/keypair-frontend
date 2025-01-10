import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
    return (
        <>
            <AuthProvider>
                <Outlet />
            </AuthProvider>
        </>
    );
}

export default App;

