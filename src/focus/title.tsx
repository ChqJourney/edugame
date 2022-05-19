import React from "react";

export const Title=()=>{

    return (
        <div className="bg-sky-700 py-4 h-[10%] flex items-center justify-between">
            <div><img src="/logo192.png" className="ml-2 h-12 w-12 sm:h-18 sm:w-18 top-2 left-2 rounded-full" alt=""/></div>
            <div className=" text-white texl-xl md:text-3xl font-sans text-center font-black mb-4">Molly, focus</div>
            <div><img src="/kelly.png" alt="kelly" className="mr-2 h-12 w-12 sm:h-18 sm:w-18 top-2 right-2 rounded-full" /></div>
        </div>
    )
}