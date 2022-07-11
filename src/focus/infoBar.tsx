import React, { useContext } from "react";
import { FocusContext } from "../operations/FocusContext";


export const InfoBar=()=>{
    const {state}=useContext(FocusContext)
    const time=(state.leftTime!==undefined&&state.leftTime<500)?state.leftTime:""
    return (
        <div className="flex my-4 mx-2 md:mx-4">
            <div className=" text-base text-sky-700 font-semibold font-sans">Last game spend:</div>
            <div className="w-14 text-center text-orange-700 font-sans font-bold rounded-md  text-lg ml-2 bg-sky-200">{time}</div>
            <div className=" text-sky-500 font-serif font-bold text-lg ml-1">seconds</div>
        </div>
    )
}