import React from "react";

function Category({ category, onClick, focused }) {
    return (
        <div className="">
            <button
                className={`w-full h-full flex px-2 py-1 text-gray-200 text-sm hover:bg-gray-700 flex items-center ${
                    focused ? "bg-gray-700" : ""
                }`}
                onClick={() => {
                    onClick(category._id);
                }}
            >
                <img
                    className="w-4 h-4"
                    src="https://img.icons8.com/?size=100&id=60671&format=png&color=FFFFFF"
                    alt="logo"
                />
                {category.title}
            </button>
        </div>
    );
}

export default Category;
