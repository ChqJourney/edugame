import React, { useContext } from "react";
import { GameContext } from "../operations/GameContext";


export const InfoBar=()=>{
    const {state}=useContext(GameContext)
    return (
        <div className="flex">
            <div>Last game spend:</div>
            <div>{state.roundTime-state.leftTime}</div>
        </div>
    )
}