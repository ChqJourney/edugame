import React from "react";
import ReactModal from "react-modal";


export const ActionSheet=({options,confirmCallback,cancelCallback}:{options:string[],confirmCallback:(idStr:string)=>void,cancelCallback:()=>void})=>{


    return (
        <div className="h-48 rounded-xl w-full space-y-2">
            {options.map((option,idx)=><SheetOption option={option} key={idx} callback={confirmCallback}/>)}
            <div onClick={cancelCallback} className="text-orange-700 cursor-pointer h-10 border rounded-md bg-white flex justify-center items-center text-2xl ">Cancel</div>
        </div>
    )
}

const SheetOption=({option,callback}:{option:string,callback:(idStr:string)=>void})=>{

    return (
        <div onClick={()=>callback(option.substring(0,1))} className="text-slate-800 cursor-pointer h-12 border rounded-md bg-white flex justify-center items-center text-2xl ">{option}</div>
    )
}