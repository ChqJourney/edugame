import React, { useContext } from "react";
import { PinyinContext } from "../operations/PinyinContext";
import { createPyTis } from "./pyFunc";
import { PyTi } from "./pyInterface";

export const PinyinNav = () => {

    return (
        <div className="h-[10%] bg-gradient-to-r from-indigo-500 flex justify-between items-center px-4">{
            ["声母","韵母","混合"].map((v,i)=><NavBlock txt={v} key={i}/>)
        }</div>
    )
}

export const NavBlock = ({ txt }: { txt: string }) => {
    const { dispatch } = useContext(PinyinContext);
    function handleClick() {
        dispatch({type:"fn_switchModal",modal:{showMsg:true,msg:txt}})
    }
    return (
        <button onClick={handleClick} className="text-gray-200 font-bold font-serif text-2xl drop-shadow-lg">{txt}</button>
    )
}