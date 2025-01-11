import React from "react";

function Controls({ refreshCategories }) {
    return (
        <div>
            <div className="flex gap-1 justify-center">
                <img
                    className="w-6 h-6 mr-4"
                    src="https://res-console.cloudinary.com/dxsffcg6l/thumbnails/v1/image/upload/v1736502550/aW1hZ2VfMjAyNS0wMS0xMF8xNTE2NTQ5NTQtcmVtb3ZlYmctcHJldmlld194YmV4dW4=/drilldown"
                    alt="logo"
                />
                <a
                    href="#"
                    className="flex items-center text-lg font-bold text-gray-900 dark:text-primary-50 hover:bg-gray-700 p-1 rounded"
                >
                    <img
                        className="w-5 h-5"
                        src="https://img.icons8.com/?size=100&id=11550&format=png&color=FFFFFF"
                        alt="create-keypair"
                    />
                </a>
                <a
                    href="#"
                    className="flex items-center text-lg font-bold text-gray-900 dark:text-primary-50 hover:bg-gray-700 p-1 rounded"
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
                    href="#"
                    className="flex items-center text-lg font-bold text-gray-900 dark:text-primary-50 hover:bg-gray-700 p-1 rounded"
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
