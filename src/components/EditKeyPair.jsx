import React, { useState } from "react";
import { editKeyPair } from "../api";
import { requestHandler, Toast } from "../utils";
import { Loader } from "../components";

function EditKeyPair({ onBack, keyPair }) {
    const [data, setData] = useState({
        title: keyPair.title,
        value: keyPair.value,
        description: keyPair.description,
        catId: keyPair.category,
        keyPairId: keyPair._id,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleDataChange = (name) => (e) => {
        setData({
            ...data,
            [name]: e.target.value,
        });
    };

    const handleCreateKeyPair = async () => {
        if (!keyPair) return;
        //console.log(data);
        await requestHandler(
            async () => await editKeyPair(data),
            setIsLoading,
            (data) => Toast.success("KeyPair Created Successfully"),
            Toast.failure
        );
        onBack(false);
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the box
        >
            {isLoading && <Loader />}
            <div className="bg-white dark:bg-gray-800 w-96 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4 text-gray-700 dark:text-gray-300">
                    Create Key Pair
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={data.title}
                        onChange={handleDataChange("title")}
                        required={true}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="value"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        Value
                    </label>
                    <input
                        id="value"
                        name="value"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={data.value}
                        onChange={handleDataChange("value")}
                        required={true}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        Description
                    </label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={data.description}
                        onChange={handleDataChange("description")}
                    />
                </div>
                <div className="flex justify-end gap-3">
                    <button
                        className="px-4 py-2 bg-primary-150 text-white rounded-lg hover:bg-primary-250 focus:outline-none focus:ring-2 focus:ring-primary-450"
                        onClick={handleCreateKeyPair}
                    >
                        Confirm Edit
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={() => onBack(false)}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditKeyPair;
