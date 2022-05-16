import React, { useContext } from "react";
import { GameContext } from "../operations/GameContext";

export const RoundTimeSelector=()=>{
    const {state,dispatch}=useContext(GameContext)
    const handleRoundTime=(e:any)=>{
        if(state.status!=='running'){
            dispatch({type:'set_game_parameter',roundTime:e.target.value,dimension:state.dimension,arr:state.arr})
        }
    }
    return (
        <select className="w-24 outline-none border rounded-md pl-4" onChange={e=>handleRoundTime(e)}>
            <option value={60}>60s</option>
            <option value={120}>120s</option>
            <option value={180}>180s</option>
            <option value={300}>300s</option>
            <option value={600}>600s</option>
        </select>
    )
}