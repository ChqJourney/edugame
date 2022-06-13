import React from "react";

export const PinyinNav = () => {

    return (
        <div className="h-[10%] bg-pink-600 flex justify-between items-center px-4">{
            ["声母","韵母","混合"].map((v,i)=><NavBlock txt={v} key={i}/>)
        }</div>
    )
}

export const NavBlock = ({ txt }: { txt: string }) => {

    return (
        <button className="text-gray-200 font-bold font-serif text-2xl drop-shadow-lg">{txt}</button>
    )
}