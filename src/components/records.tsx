import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../operations/GameContext";

export const Records=()=>{

    const {state,dispatch}=useContext(GameContext)
    useEffect(()=>{
        let localRecordsStr=localStorage.getItem('records')
        if(localRecordsStr!=null){
            dispatch({type:"set_game_records",recordLevel:`${state.dimension} x ${state.dimension}`,records:JSON.parse(localRecordsStr)??[]})
        } 
    },[])

    return (
        <>
        
        <div>Records:</div>
        {state.records.map((val:any,idx:number)=><Record key={idx} createdAt={val.createdAt} level={val.level} time={val.time}/>)}
        </>
    )
}
const Record=({createdAt,level,time}:{createdAt:Date,level:string,time:number})=>{

    return (
        <div className="flex">
            <div>{createdAt.toDateString()}</div>
            <div>{level}</div>
            <div>{time} seconds</div>
        </div>
    )
}