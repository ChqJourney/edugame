import React, { useContext } from "react";
import { FocusContext } from "../operations/FocusContext";
import { createRandomArray } from "./bracket";
import { DimensionSelector } from "./dimensionSelector";
import { InfoBar } from "./infoBar";
import { RoundTimeSelector } from "./roundTimeSelector";
import { TimerDisplay } from "./timeDisplay";

//react-hooks/exhaustive-deps

export const Controller=({sounder}:{sounder:(id:any)=>void})=>{
    console.log('redner controller')
    const {state,dispatch}=useContext(FocusContext)
    const startAction=()=>{
        if(state.btnText==="Start"){
            console.log('stop')
            dispatch({type:'set_game_parameter',dimension:state.dimension,roundTime:state.roundTime,arr:createRandomArray(state.dimension*state.dimension)})
            dispatch({type:'set_game_status',status:'running',btnText:'Stop',arr:state.arr})
        }else{
            dispatch({type:'set_game_status',status:'idle',btnText:'Start',arr:state.arr})
            dispatch({type:'set_game_parameter',dimension:state.dimension,roundTime:state.roundTime,arr:createRandomArray(state.dimension*state.dimension)})
        }
    }
    return (
        <div className="">
        <div className="flex mb-8 justify-between mx-1 md:mx-4 ">
            <TimerDisplay sounder={sounder} time={state.roundTime} status={state.status}/>
            <DimensionSelector/>
            {/* <RoundTimeSelector/> */}
            <button className={`mx-2 ${state.btnText==='Stop'?"text-red-600 bg-sky-600":"text-sky-600"} border font-semibold border-slate-300 rounded-md shadow-lg w-32 h-10 hover:scale-105 hover:bg-sky-300`}
            onClick={()=>startAction()}>{state.btnText}</button>
            {/* <SoundPlayer play={state.soundPlay} sound={state.soundSrc??"assets/sounds/ding.mp3"}/> */}
        </div>
        <InfoBar/>
            </div>
    )
}