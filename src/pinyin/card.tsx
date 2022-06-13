import React from "react";

export const Card=({py}:{py:string})=>{

    return (
        <div className="h-20 w-16 bg-pink-900 ring-2 ring-blue-400 ring-offset-1 border-gray-500 mix-blend-overlay shadow-lg drop-shadow-xl rounded-lg flex items-center justify-center">
            <div className="text-3xl text-white font-sans">{py}</div>
        </div>
    )
}