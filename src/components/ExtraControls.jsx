import React from "react";

function ExtraControls({ isOpen, setDeleteUI }) {
    return (
        <div id="extra">
            {isOpen && (
                <div
                    className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 
                dark:border-gray-700 rounded-lg shadow-lg z-50
                "
                >
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>
                            <button
                                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                id="extra"
                                onClick={() => setDeleteUI(true)}
                            >
                                Delete Folder
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                id="extra"
                            >
                                Rename Folder
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                id="extra"
                            >
                                Change Password
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ExtraControls;
