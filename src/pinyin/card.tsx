import React from "react";

export const Card=({py}:{py:string})=>{

    return (
        <div className="h-24 w-16 bg-lime-300 flex items-center justify-center">
            <div className="text-2xl text-red-500 font-sans">{py}</div>
        </div>
    )
}