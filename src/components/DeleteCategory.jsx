import React from "react";

function DeleteCategory({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
                {/* Modal Content */}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Are you sure you want to delete the category?
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    This action cannot be undone.
                </p>

                {/* Buttons */}
                <div className="mt-4 flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteCategory;
