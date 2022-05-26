import React, { useContext } from "react";
import { CalculatorContext } from "../operations/CalculatorContext";

export const Infos=()=>{
    const {state}=useContext(CalculatorContext)
    return (
        <div className="mx-2 md:mx-4 border-t border-lime-500 mt-4 px-2 md:px-4 overflow-y-auto mb-1">
        
        <div className="font-bold  text-sky-700">Records of {state.calType}:</div>
        {state.infos&&state.infos.map((val:any,idx:number)=><Info key={idx} idx={idx} quantity={val.quantity} corrects={val.corrects} createdAt={val.createdAt} time={val.time}/>)}
        </div>
    )
}

const Info=({idx,quantity,time,corrects,createdAt}:{idx:number,quantity:number,time:number,corrects:number,createdAt:string})=>{

    return (
        <div className="flex">
            <div className="mr-4">{idx+1}.</div>
            <div className="font-sans font-semibold mr-4">{quantity}</div>
            <div className="font-sans font-semibold mr-4">{quantity-corrects}</div>
            <div className="font-sans font-semibold mr-4">{time} seconds</div>
            <div className="">{createdAt}</div>
        </div>
    )
}