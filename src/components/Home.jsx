import React, { useEffect, useState } from "react";

import { Controls, Loader, Category, CreateCategory } from "../components";
import { LocalStorage, requestHandler } from "../utils";
import { getAllCategories } from "../api";
import { useAuth } from "../context/AuthContext";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState("");
    const [focusedBtnID, setFocusedBtnId] = useState("");
    const [openCreateCategoryForm, setOpenCreateCategoryForm] = useState(false);

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

    const handleFocus = (id) => {
        setFocusedBtnId(id);
    };

    const handleOpenCreateCategoryForm = () => {
        setOpenCreateCategoryForm((prev) => !prev);
    };

    useEffect(() => {
        (async () => {
            await fetchAllCategories();
        })();
    }, []);

    useEffect(() => {}, [categories]);

    return (
        <div className="flex h-screen">
            {isLoading && <Loader />}
            {/* Left Section */}
            <div className="w-[15%] flex flex-col bg-gray-800">
                {/* Top narrow div */}
                <div className="h-[6%] flex items-center px-3">
                    <Controls
                        refreshCategories={fetchAllCategories}
                        openCategoryForm={handleOpenCreateCategoryForm}
                    />
                </div>
                {/* Middle largest div */}
                <div
                    className="h-[86%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
                    onClick={(e) => {
                        if (e.target.placeholder != "title") setOpenCreateCategoryForm(false);
                    }}
                >
                    {openCreateCategoryForm && (
                        <CreateCategory refreshCategories={fetchAllCategories} />
                    )}
                    <div>
                        {categories ? (
                            <div>
                                {categories.map((category) => (
                                    <div key={category._id} className="">
                                        <Category
                                            category={category}
                                            onClick={handleFocus}
                                            focused={focusedBtnID == category._id}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-gray-200">Create your first folder</div>
                        )}
                    </div>
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
            <div className="w-[85%] flex flex-col" onClick={() => setOpenCreateCategoryForm(false)}>
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
