import React, { useContext } from "react";
import { GameContext } from "../operations/GameContext";
import { createRandomArray } from "./bracket";
import { DimensionSelector } from "./dimensionSelector";
import { RoundTimeSelector } from "./roundTimeSelector";
import { TimerDisplay } from "./timeDisplay";

export const Controller=()=>{
    const {state,dispatch}=useContext(GameContext)
    const startAction=()=>{
        if(state.btnText==="Start"){
            dispatch({type:'set_game_status',status:'running',btnText:'Stop'})
            dispatch({type:'set_game_parameter',dimension:state.dimension,roundTime:state.roundTime,arr:createRandomArray(state.dimension*state.dimension)})
        }else{
            dispatch({type:'set_game_status',status:'idle',btnText:'Start'})
            dispatch({type:'set_game_parameter',dimension:state.dimension,roundTime:state.roundTime,arr:createRandomArray(state.dimension*state.dimension)})
        }
    }
    return (
        <div className="flex mb-8 justify-between">
            <TimerDisplay time={state.roundTime} status={state.status}/>
            <DimensionSelector/>
            <RoundTimeSelector/>
            <button className="ml-2 border border-slate-600 rounded-md w-32 h-10 hover:scale-105 hover:bg-sky-300"
            onClick={startAction}>{state.btnText}</button>

        </div>
    )
}