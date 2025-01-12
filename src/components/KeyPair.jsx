import React, { useState } from "react";
import { EditKeyPair } from "../components";

function KeyValuePair({ keypair }) {
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [editKeyPairUI, setEditKeyPairUI] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("Hello");
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    const toggleDescription = () => {
        setDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <div className="w-full mx-auto">
            {/* Card */}
            {editKeyPairUI && <EditKeyPair onBack={setEditKeyPairUI} keyPair={keypair} />}
            <div
                className="p-4 border border-gray-500 rounded-lg shadow-sm bg-gray-800 hover:shadow-md transition cursor-pointer"
                onClick={toggleDescription}
            >
                {/* Title & Action Buttons */}
                <div className="flex w-full justify-between items-center">
                    <h3 className="font-medium text-gray-100">{keypair.title}</h3>
                    <div className="flex gap-4">
                        {/* Edit Button */}
                        <div className="p-1 hover:bg-gray-700 rounded">
                            <img
                                src="https://img.icons8.com/?size=100&id=47749&format=png&color=FFFFFF"
                                alt="Edit"
                                className="w-5 h-5 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setEditKeyPairUI(true);
                                }}
                            />
                        </div>
                        {/* Delete Button */}
                        <div className="p-1 hover:bg-gray-700 rounded">
                            <img
                                src="https://img.icons8.com/?size=100&id=nerFBdXcYDve&format=png&color=FFFFFF"
                                alt="Delete"
                                className="w-5 h-5 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete();
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Value Box */}
                <div className="relative flex mt-2 w-full flex items-center">
                    <div
                        className="
                    relative flex w-full h-10 items-center pr-3  border border-gray-500 rounded bg-black text-primary-50 text-sm font-mono"
                    >
                        <span className="w-full h-full flex items-center pl-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                            {keypair.value}
                        </span>
                        <div className="absoulte ml-2 z-10">
                            {isCopied ? (
                                <span className="text-sm text-gray-400 font-medium">Copied</span>
                            ) : (
                                <img
                                    src="https://img.icons8.com/?size=100&id=86201&format=png&color=FFFFFF"
                                    alt="Copy"
                                    className="w-5 h-5 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopy();
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Description (Revealed on Click) */}
            {isDescriptionVisible && (
                <div className="p-4 rounded-lg mt-1 border-gray-200 bg-gray-700">
                    <p className="text-sm text-gray-300">{keypair.description}</p>
                </div>
            )}
        </div>
    );
}

export default KeyValuePair;
