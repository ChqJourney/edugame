import React, { useContext } from "react";
import { FocusContext } from "../operations/FocusContext";


export const InfoBar=()=>{
    const {state}=useContext(FocusContext)
    const time=state.leftTime?state.roundTime-state.leftTime:""
    return (
        <div className="flex mx-2 md:mx-4">
            <div className=" text-base text-orange-400 font-semibold font-mono">Last game spend:</div>
            <div className="w-10 text-center text-sky-700 font-mono font-bold text-lg ml-2">{time}</div>
            <div className=" text-sky-500 font-serif font-bold text-lg ml-1">seconds</div>
        </div>
    )
}