import React from "react";

function Controls({
    refreshCategories,
    openCategoryForm,
    openExtraControlsMenu,
    openCreateKeyPair,
}) {
    return (
        <div className="relative">
            <div className="flex gap-1 justify-center ">
                <img
                    className="w-6 h-6 mr-4"
                    src="https://res.cloudinary.com/dxsffcg6l/image/upload/fl_preserve_transparency/v1736502550/image_2025-01-10_151654954-removebg-preview_xbexun.jpg?_s=public-apps"
                    alt="logo"
                />
                <a
                    className="flex items-center text-lg font-bold text-gray-900 dark:text-primary-50 hover:bg-gray-700 p-1 rounded"
                    onClick={() => openCreateKeyPair(true)}
                >
                    <img
                        className="w-5 h-5"
                        src="https://img.icons8.com/?size=100&id=11550&format=png&color=FFFFFF"
                        alt="create-keypair"
                    />
                </a>
                <a
                    className="flex items-center text-lg font-bold text-gray-900 dark:text-primary-50 hover:bg-gray-700 p-1 rounded"
                    onClick={openCategoryForm}
                >
                    <img
                        className="w-5 h-5"
                        src="https://img.icons8.com/?size=100&id=16745&format=png&color=FFFFFF"
                        alt="create-folder"
                    />
                </a>
                <a
                    className="flex items-center text-lg font-bold text-gray-900 dark:text-primary-50 hover:bg-gray-700 p-1 rounded"
                    onClick={refreshCategories}
                >
                    <img
                        className="w-5 h-5"
                        src="https://img.icons8.com/?size=100&id=54313&format=png&color=FFFFFF"
                        alt="reload"
                    />
                </a>
                <a
                    className="flex items-center text-lg font-bold text-gray-900 dark:text-primary-50 hover:bg-gray-700 p-1 rounded"
                    onClick={openExtraControlsMenu}
                >
                    <img
                        className="w-5 h-5"
                        src="https://img.icons8.com/?size=100&id=37924&format=png&color=FFFFFF"
                        alt="more"
                    />
                </a>
            </div>
        </div>
    );
}

export default Controls;
