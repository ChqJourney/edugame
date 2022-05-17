import React, { useContext } from "react";
import { GameContext } from "../operations/GameContext";


export const InfoBar=()=>{
    const {state}=useContext(GameContext)
    return (
        <div className="flex">
            <div className=" text-base text-orange-400 font-semibold font-mono">Last game spend:</div>
            <div className="w-10 text-center text-sky-700 font-mono font-bold text-lg ml-2">{state.leftTime>1000?0:state.roundTime-state.leftTime}</div>
            <div className=" text-sky-500 font-serif font-bold text-lg ml-1">seconds</div>
        </div>
    )
}