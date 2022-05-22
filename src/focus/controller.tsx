import React, { useContext } from "react";
import { FocusContext } from "../operations/FocusContext";
import { createRandomArray } from "./bracket";
import { DimensionSelector } from "./dimensionSelector";
import { RoundTimeSelector } from "./roundTimeSelector";
import { TimerDisplay } from "./timeDisplay";

//react-hooks/exhaustive-deps

export const Controller=()=>{
    const {state,dispatch}=useContext(FocusContext)
    const startAction=()=>{
        if(state.btnText==="Start"){
            dispatch({type:'set_game_status',status:'running',btnText:'Stop',arr:state.arr})
            dispatch({type:'set_game_parameter',dimension:state.dimension,roundTime:state.roundTime,arr:createRandomArray(state.dimension*state.dimension)})
        }else{
            dispatch({type:'set_game_status',status:'idle',btnText:'Start',arr:state.arr})
            dispatch({type:'set_game_parameter',dimension:state.dimension,roundTime:state.roundTime,arr:createRandomArray(state.dimension*state.dimension)})
        }
    }
    return (
        <div className="flex mb-8 justify-between mx-1 md:mx-4 pt-2">
            <TimerDisplay time={state.roundTime} status={state.status}/>
            <DimensionSelector/>
            <RoundTimeSelector/>
            <button className="ml-2 border border-slate-600 rounded-md w-32 h-10 hover:scale-105 hover:bg-sky-300"
            onClick={startAction}>{state.btnText}</button>
            {/* <SoundPlayer play={state.soundPlay} sound={state.soundSrc??"assets/sounds/ding.mp3"}/> */}
        </div>
    )
}