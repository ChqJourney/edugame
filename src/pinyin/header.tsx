import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PinyinContext } from "../operations/PinyinContext";
import { Timer } from "./timer";

export const Header=({sounder}:{sounder:({id}:{id:string})=>void})=>{
    const navigate=useNavigate()
    const {state}=useContext(PinyinContext)
    return (
        <div className="bg-sky-500 h-[10%] flex items-center justify-between relative px-6">
            <button className="border-0 hover:bg-slate-400 rounded-md h-10" onClick={()=>navigate('/')}>
            <svg className="h-8 w-8 fill-pink-500" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2276" width="200" height="200"><path d="M379.616 515.648L705.44 841.472c20 20 20 52.416 0 72.416s-52.416 20-72.416 0L270.976 551.84c-20-20-20-52.416 0-72.416l362.048-362.048c20-20 52.416-20 72.416 0s20 52.416 0 72.416L379.616 515.616z" p-id="2277"></path></svg>
            </button>
           
            {/* <button className="border border-white hover:bg-slate-400 rounded-md w-32 h-10 absolute left-[50%] -translate-x-[50%]">Start</button> */}
        </div>
    )
}