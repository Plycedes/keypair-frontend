import React, { useEffect, useState } from "react";
import { KeyValuePair } from "../components";

function KeysList({ keyPairs }) {
    return (
        <div className="m-3 h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {keyPairs && (
                <div className="gap-3 mr-2">
                    {keyPairs.map((keyPair, index) => (
                        <div key={index}>
                            <KeyValuePair keypair={keyPair} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default KeysList;
