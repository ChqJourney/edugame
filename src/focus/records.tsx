import React, { useContext, useEffect } from "react";
import { FocusContext } from "../operations/FocusContext";

export const Records=()=>{

    const {state,dispatch}=useContext(FocusContext)
    useEffect(()=>{
        let localRecordsStr=localStorage.getItem('records')
        if(localRecordsStr!=null){
            const obj=JSON.parse(localRecordsStr)
            dispatch({type:"set_game_records",recordLevel:`${state.dimension} x ${state.dimension}`,records:obj[`${state.dimension} x ${state.dimension}`]??[]})
        } 
         // eslint-disable-next-line
    },[])

    return (
        <div className="mx-2 md:mx-4 border border-pink-500 h-[12%] mt-4 rounded-md px-2 md:px-4 overflow-y-auto mb-1">
        
        <div className="font-bold  text-sky-700">Records of {state.dimension} x {state.dimension}:</div>
        {state.records&&state.records.map((val:any,idx:number)=><Record key={idx} idx={idx}  createdAt={val.createdAt} time={val.time}/>)}
        </div>
    )
}
const Record=({createdAt,time,idx}:{createdAt:string,time:number,idx:number})=>{

    return (
        <div className="flex">
            <div className="mr-4">{idx+1}.</div>
            <div className="font-sans font-semibold mr-4">{time} seconds</div>
            <div className="">{createdAt}</div>
        </div>
    )
}