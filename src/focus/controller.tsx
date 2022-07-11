import React, { useContext } from "react";
import { Timer } from "../common/timer";
import { FocusContext } from "../operations/FocusContext";
import { createRandomArray } from "./bracket";
import { DimensionSelector } from "./dimensionSelector";
import { InfoBar } from "./infoBar";
import { TimerDisplay } from "./timeDisplay";

//react-hooks/exhaustive-deps

export const Controller = ({ sounder }: { sounder: ({ id }: { id: string }) => void }) => {
    const { state, dispatch } = useContext(FocusContext)

    const startAction = () => {
        if (!state.status.includes("running")) {
            setTimeout(() => {
                dispatch({ type: 'set_game_parameter', dimension: state.dimension, roundTime: state.roundTime, arr: createRandomArray(state.dimension * state.dimension) })
                dispatch({ type: 'set_game_status', status: 'running', btnText: 'Stop', arr: state.arr })
            }, 2200)
            sounder({ id: 'start' })
        } else {
            dispatch({ type: 'set_game_status', status: 'idle', btnText: 'Start', arr: state.arr })
            dispatch({ type: 'set_game_parameter', dimension: state.dimension, roundTime: state.roundTime, arr: createRandomArray(state.dimension * state.dimension) })
        }
    }
    const timeoutAction=()=>{
        sounder({id:'timeout'})
        dispatch({type:'set_game_status',status:'timeout',btnText:'Start',arr:state.arr})
        setTimeout(() => {
            dispatch({type:'set_game_status',status:'idle',leftTime:state.leftTime,arr:state.arr,btnText:'Start'})
            dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:state.dimension,arr:createRandomArray(state.dimension*state.dimension)})
        }, 2000);
    }
    const successAction=(sec:number)=>{
        dispatch({type:'set_game_status',status:'finish',leftTime:sec,btnText:'Start',arr:state.arr})
        setTimeout(() => {
            dispatch({type:'set_game_status',status:'idle',leftTime:sec,btnText:'Start'})
            dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:state.dimension,arr:createRandomArray(state.dimension*state.dimension)})
        }, 2000);
        const rs=validateAndPersistanceRecords(state.records??[],{time:state.roundTime-sec,createdAt:new Date().toLocaleString(),user:state.userName});
        dispatch({type:'set_game_records',recordLevel:`${state.dimension} x ${state.dimension}`,records:rs})
        var level=`${state.dimension.toString()} x ${state.dimension.toString()}`
        var str=localStorage.getItem('records-focus');
        let obj:any=str?JSON.parse(str):{}
        obj[level]=[...rs]
        localStorage.setItem('records-focus',JSON.stringify(obj))
    }
    return (
        <div className="">
            <div className="flex mb-8 justify-between mx-1 md:mx-4 ">
                <Timer duration={state.roundTime} operation={state.status} warningFromLeftSeconds={5} onTimeoutCallback={()=>timeoutAction()} onSuccessCallback={(second)=>successAction(second)}/>
                {/* <TimerDisplay sounder={sounder} time={state.roundTime} status={state.status} /> */}
                <DimensionSelector />
                <button className={`mx-1 ${state.btnText === 'Stop' ? "text-red-600 bg-sky-600" : "text-sky-600"} border font-semibold border-slate-300 rounded-md shadow-lg w-32 h-10 hover:scale-105 hover:bg-sky-300`}
                    onClick={startAction}>{state.btnText}</button>
            </div>
            <InfoBar />
        </div>
    )
}

export const validateAndPersistanceRecords=(records:any[],newRecord:any):any[]=>{
    let newArr=records.concat([newRecord])
    return newArr.sort((a,b)=>a.time-b.time).slice(0,9);
}