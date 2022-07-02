import React, { useContext, useReducer } from "react";
import ReactModal from "react-modal";
import useSound from "use-sound";
import { initPinyinState, PinyinContext } from "../operations/PinyinContext";
import { PinyinReducer } from "../operations/PinyinReducer";
import { Card } from "./card";
import { CardsBracket } from "./cardsBracket";
import { Header } from "./header";
import { aArray, eArray, oArray } from "./pinyinArr";
import { PinyinNav } from "./pinyinNav";
import { createPyTis } from "./pyFunc";
import { PyTi } from "./pyInterface";
import { QaContainer } from "./qaContainer";

export const PinyinContainer=({sounder}:{sounder:({id}:{id:string})=>void})=>{
    const {state,dispatch}=useContext(PinyinContext)
    const startAct=()=>{
        const str=["声母","韵母","混合"]
        setTimeout(()=>{
        fetch(`assets/qs/tis${str.findIndex((v,i)=>v===state.modal.msg)}.json`).then(res => res.json()).then((data:PyTi[]) => {
            console.log(createPyTis({quantity:10,source:data}))
            dispatch({type:"fn_initTis",tis:createPyTis({quantity:10,source:data})})
        })
        },2300)
        setTimeout(()=>{
            console.log(state.tis)
        },5000)
        
        dispatch({type:'fn_switchModal',modal:{showMsg:false}})
        dispatch({type:"fn_setMode",mode:state.modal.msg??"声母"})
        // play({id:'start'})
    }
    return (
       <>
            <Header/>
            <QaContainer sound={sounder}/>
            <PinyinNav/>
            <ReactModal className=" absolute top-[50%] left-[50%] border-2 -translate-x-1/2 -translate-y-3/4" shouldCloseOnOverlayClick={false} isOpen={state.modal.showMsg}>
            <div className="bg-zinc-400 w-48 h-36 rounded-md relative flex flex-col justify-center items-center">
                    <button className="absolute top-1 right-3" onClick={()=>dispatch({type:'fn_switchModal',modal:{showMsg:false}})}>X</button>
                    <div className="text-lg text-red-500 font-semibold mb-2">开始吗？</div>
                    <div className="flex space-x-2">
                    <button className="w-16 h-10 rounded-md left-2 bg-orange-500" onClick={()=>startAct()}>确定</button>
                    <button className="w-16 h-10 rounded-md right-2 bg-stone-500" onClick={()=>dispatch({type:'fn_switchModal',modal:{showMsg:false}})}>取消</button>
                    </div>
                </div>
            </ReactModal>
            </>
            
    )
}