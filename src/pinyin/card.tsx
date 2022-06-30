import React from "react";
import { transformPyString } from "./pyFunc";

export const Card=({py}:{py:string})=>{

    return (
        <div className="h-16 w-16 ring-2 bg-sky-600 ring-blue-400 ring-offset-1 border-gray-700 mix-blend-overlay shadow-lg drop-shadow-xl rounded-lg flex items-center justify-center">
            <div className="text-3xl text-white font-sans">{transformPyString(py)}</div>
        </div>
    )
}