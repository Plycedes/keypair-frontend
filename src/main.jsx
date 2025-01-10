import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

import { Home, SignIn, SignUp, KeyPairs } from "./components";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="keypairs" element={<KeyPairs />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

