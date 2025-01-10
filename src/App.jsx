import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, Home } from "./components";
import { useAuth } from "./context/AuthContext";

function App() {
    const { token, user } = useAuth();
    return (
        <Routes>
            <Route
                path="/"
                element={token && user?._id ? <Navigate to="home" /> : <Navigate to="signin" />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<p>404 Not found</p>} />
        </Routes>
    );
}

export default App;

