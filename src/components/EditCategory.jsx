import React, { useState } from "react";
import { Loader } from "../components";
import { requestHandler } from "../utils";
import { editCategory } from "../api";

function EditCategory({ catId, catTitle, setEditMode, refreshCategories }) {
    const [title, setTitle] = useState(catTitle);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title != "") {
            await requestHandler(
                async () => await editCategory({ catId, title }),
                setIsLoading,
                () => {},
                alert
            );
            setTitle("");
            setEditMode(false);
            refreshCategories();
        }
        console.log(title);
    };
    return (
        <div>
            {isLoading && <Loader />}
            <form className="w-full px-1 mt-1" onSubmit={handleSubmit}>
                <input
                    placeholder="title"
                    className="w-full bg-gray-600 focus:border-gray-700 px-1 text-gray-300"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </div>
    );
}

export default EditCategory;
