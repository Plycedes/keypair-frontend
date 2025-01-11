import React, { useState } from "react";

function ChangePassword({ onChangePassword, onBack }) {
    const [data, setData] = useState({
        oldPassword: "",
        newPassword: "",
    });

    const handleDataChange = (name) => (e) => {
        setData({
            ...data,
            [name]: e.target.value,
        });
    };

    const handleChangePassword = () => {
        if (!oldPassword || !newPassword) {
            alert("Please fill in both fields.");
            return;
        }

        // Callback to handle the password change logic
        onChangePassword(oldPassword, newPassword);
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the box
        >
            <div className="bg-white dark:bg-gray-800 w-96 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4 text-gray-700 dark:text-gray-300">
                    Change Password
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="old-password"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        Old Password
                    </label>
                    <input
                        id="old-password"
                        type="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={data.oldPassword}
                        onChange={(e) => handleDataChange("oldPassword")}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="new-password"
                        className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        New Password
                    </label>
                    <input
                        id="new-password"
                        type="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={data.newPassword}
                        onChange={(e) => handleDataChange("newPassword")}
                    />
                </div>
                <div className="flex justify-end gap-3">
                    <button
                        className="px-4 py-2 bg-primary-150 text-white rounded-lg hover:bg-primary-250 focus:outline-none focus:ring-2 focus:ring-primary-450"
                        onClick={handleChangePassword}
                    >
                        Change Password
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

export default ChangePassword;
