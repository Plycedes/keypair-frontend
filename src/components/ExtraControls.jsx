import React from "react";

function ExtraControls({
    focused,
    isOpen,
    setIsOpen,
    setDeleteUI,
    setEditMode,
    setChangePasswordUI,
}) {
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
                                onClick={() => {
                                    if (focused) setDeleteUI(true);
                                    setIsOpen(false);
                                }}
                            >
                                Delete Folder
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                id="extra"
                                onClick={() => {
                                    if (focused) setEditMode(true);
                                    setIsOpen(false);
                                }}
                            >
                                Rename Folder
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                id="extra"
                                onClick={() => {
                                    setChangePasswordUI(true);
                                    setIsOpen(false);
                                }}
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
