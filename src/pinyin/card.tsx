import React, { useContext } from "react";
import { PinyinContext } from "../operations/PinyinContext";
import { transformPyString } from "./pyFunc";

export const Card=({py,idx}:{py:string,idx:number})=>{
    const { state,dispatch } = useContext(PinyinContext);
    function setAnswer(){
        dispatch({type:'fn_recordUserAnswer',userAnswerIdx:idx})
    }
    return (
        <div tabIndex={idx} onClick={setAnswer} className={`h-16 w-16 ring-2 ${state.tis[state.currentIdx].userAnswerIndex===idx?"bg-red-500":"bg-sky-600"} cursor-pointer ring-blue-400 ring-offset-1 border-gray-700 mix-blend-overlay shadow-lg drop-shadow-xl rounded-lg flex items-center justify-center`}>
            <div className="text-3xl text-white font-sans">{transformPyString(py)}</div>
        </div>
    )
}