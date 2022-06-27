import React, { useReducer } from "react";
import ReactModal from "react-modal";
import useSound from "use-sound";
import { initPinyinState, PinyinContext } from "../operations/PinyinContext";
import { PinyinReducer } from "../operations/PinyinReducer";
import { Card } from "./card";
import { CardsBracket } from "./cardsBracket";
import { Header } from "./header";
import { aArray, eArray, oArray } from "./pinyinArr";
import { PinyinNav } from "./pinyinNav";
import { QaContainer } from "./qaContainer";

export const PinyinContainer=()=>{
    const [play]=useSound('assets/sounds/py.mp3',{sprite:{
        'a':[480,650],
        'o':[1633,720],
        'e':[2750,690],
        'i':[3470,720],
        'u':[4250,700],
        'v':[5030,1000]
    }})
    const [state, dispatch] = useReducer(PinyinReducer, initPinyinState);
    return (
        <PinyinContext.Provider value={{state,dispatch}}>
        <div className="container mx-auto h-screen w-full lg:w-[500px] bg-gradient-to-b from-cyan-300 to-blue-300 flex flex-col justify-between">
            <Header/>
            <QaContainer sound={({id}:{id:string})=>play({id})}/>
            <PinyinNav/>
            {/* <ReactModal className=" absolute top-[50%] left-[50%] border-2 -translate-x-1/2 -translate-y-3/4" shouldCloseOnOverlayClick={false} isOpen={false}>
                modal
            </ReactModal> */}
        </div>
        </PinyinContext.Provider>
    )
}