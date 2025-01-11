import React, { useEffect, useState } from "react";

import { Controls, Loader } from "../components";
import { LocalStorage, requestHandler } from "../utils";
import { getAllCategories } from "../api";
import { useAuth } from "../context/AuthContext";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState("");
    const { logout } = useAuth();

    const fetchAllCategories = async () => {
        await requestHandler(
            async () => await getAllCategories(),
            setIsLoading,
            (data) => {
                setCategories(data);
                console.log(data);
            },
            alert
        );
    };

    useEffect(() => {
        (async () => {
            await fetchAllCategories();
        })();
    }, []);

    useEffect(() => {}, [categories]);

    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="w-[15%] flex flex-col bg-gray-800">
                {/* Top narrow div */}
                <div className="h-[6%] flex items-center px-3">
                    <Controls />
                </div>
                {/* Middle largest div */}
                <div className="h-[86%] ">
                    {categories ? (
                        <div>
                            {categories.map((category, index) => (
                                <div key={index}>Category</div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-gray-200">Create your first folder</div>
                    )}
                </div>
                {/* Bottom narrow div */}
                <div className="h-[8%] py-3 px-2">
                    <div>
                        <button
                            type="button"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 
                            focus:ring-4 focus:outline-none 
                            focus:ring-primary-300 font-medium 
                            rounded-lg text-sm px-5 py-2.5 
                            text-center dark:bg-primary-150 
                            dark:hover:bg-primary-250 dark:focus:ring-primary-450"
                            onClick={async () => await logout()}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-[85%] flex flex-col">
                {/* Top narrow div */}
                <div className="h-[5%] bg-gray-700 flex justify-center items-center p-2">
                    <div className="w-1/3 flex items-center justify-center bg-gray-700 border border-gray-400 rounded-full px-2 py-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l4 4"
                            />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search keypairs"
                            className="bg-gray-700 text-center text-xs text-gray-400 placeholder-gray-400 outline-none ml-2 w-full"
                        />
                    </div>
                </div>
                {/* Bottom largest div */}
                <div className="h-[95%] bg-gray-900"></div>
            </div>
        </div>
    );
}

export default Home;
