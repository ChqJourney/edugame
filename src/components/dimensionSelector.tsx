import React, { useContext } from "react";
import { GameContext } from "../operations/GameContext";
import { createRandomArray } from "./bracket";

export const DimensionSelector=()=>{
    const {state,dispatch}=useContext(GameContext)
    const handleDimensionChange=(e:any)=>{
        if(state.status!=='running'){
            dispatch({type:'set_game_parameter',dimension:e.target.value,roundTime:state.roundTime,arr:createRandomArray(e.target.value*e.target.value)})
        }
    }
    return (
        <select className="w-24 border outline-none rounded-md pl-4 mx-1 cursor-pointer hover:scale-105" onChange={e=>handleDimensionChange(e)}>
            <option value={3}>3 x 3</option>
            <option value={4}>4 x 4</option>
            <option value={5}>5 x 5</option>
            <option value={6}>6 x 6</option>
        </select>
    )
}