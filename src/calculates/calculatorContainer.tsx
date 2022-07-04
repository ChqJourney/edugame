import React, { useEffect, useReducer } from "react";
import { CalculatorContext, initCalculatorState } from "../operations/CalculatorContext";
import { CalculatorReducer } from "../operations/CalculatorReducer";
import { Infos } from "./infos";
import { Keyboard } from "./keyboard";
import { Screen } from "./screen";
import Modal from 'react-modal';
import useSound from "use-sound";
import { useNavigate } from "react-router-dom";

export const CalculatorContainer=()=>{
    const navigate=useNavigate()
    const [play]=useSound('assets/sounds/effects.mp3',{sprite:{
        'success':[316,2100],
        'wrong':[2824,1700],
        'correct':[6334,1200],
        'timeout':[7686,2100],
        'start':[10106,2050]
    }})
    const [state, dispatch] = useReducer(CalculatorReducer, initCalculatorState);
    function blur() {
        navigate('/')
    }
    // useEffect(() => {
    //     window.addEventListener('blur',blur)
    //     return () => window.removeEventListener('blur',blur)
    // },[])
    return (
        <CalculatorContext.Provider value={{state,dispatch}}>

        <div className="container mx-auto h-full w-full lg:w-[500px] flex flex-col justify-between">
            
            <Screen sounder={({id}:{id:string})=>play({id})}/>
            <Keyboard sounder={(id:any)=>play(id)}/>
            <Infos/>
            <Modal className=" absolute top-[50%] left-[50%] border-2 -translate-x-1/2 -translate-y-3/4" shouldCloseOnOverlayClick={false} isOpen={state.showMsg}>
                {state.modal}
            </Modal>
        </div>
        </CalculatorContext.Provider>
    )
}

