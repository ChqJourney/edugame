import React, { useReducer } from "react";
import ReactModal from "react-modal";
import useSound from "use-sound";
import { initPinyinState, PinyinContext } from "../operations/PinyinContext";
import { PinyinReducer } from "../operations/PinyinReducer";
import { Card } from "./card";
import { CardsBracket } from "./cardsBracket";
import { Header } from "./header";
import { aArray, eArray, oArray } from "./pinyinArr";
import { QaContainer } from "./qaContainer";

export const PinyinContainer=()=>{
    const [play]=useSound('assets/sounds/effects.mp3',{sprite:{
        'success':[316,2100],
        'wrong':[2824,1700],
        'correct':[6334,1200],
        'timeout':[7686,2100],
        'start':[10106,2050]
    }})
    const [state, dispatch] = useReducer(PinyinReducer, initPinyinState);
    return (
        <PinyinContext.Provider value={{state,dispatch}}>
        <div className="container mx-auto h-full w-full lg:w-[500px] flex flex-col justify-between">
            <Header/>
            <QaContainer/>
            <ReactModal className=" absolute top-[50%] left-[50%] border-2 -translate-x-1/2 -translate-y-3/4" shouldCloseOnOverlayClick={false} isOpen={false}>
                modal
            </ReactModal>
        </div>
        </PinyinContext.Provider>
    )
}