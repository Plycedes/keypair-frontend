import React from "react";

function CreateCategory() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Create Category");
    };
    return (
        <form className="w-full px-1 mt-1" onSubmit={handleSubmit}>
            <input
                placeholder="title"
                className="w-full bg-gray-600 focus:border-gray-700 px-1 text-gray-300"
            />
        </form>
    );
}

export default CreateCategory;
