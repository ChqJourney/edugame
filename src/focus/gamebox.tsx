import React, { useContext, useEffect } from "react";
import useSound from "use-sound";
import { FocusContext } from "../operations/FocusContext";
import { Bracket } from "./bracket";
import { Records } from "./records";
import { Title } from "./title";

export const GameBox = () => {
    const {dispatch}=useContext(FocusContext);
    const [play]=useSound('assets/sounds/effects.mp3',{sprite:{
        'success':[316,2100],
        'wrong':[2824,1700],
        'correct':[6334,1200],
        'timeout':[7686,2100],
        'start':[10106,2050]
    }})
    function blur(){
        dispatch({type:'set_stop',status:'suspend',btnText:'Suspend'})
    }
    function active(){
        dispatch({type:'showModal',visible:true})
    }
    useEffect(()=>{
        window.addEventListener('blur',blur)
        window.addEventListener('focus',active)
        return ()=>{
            window.removeEventListener('blur',blur) 
        window.removeEventListener('focus',active)
    }
    // eslint-disable-next-line 
    },[])
    return (
        <div className="flex flex-col relative justify-start justify-items-start overflow-y-hidden h-screen lg:w-[600px] md:mx-auto">
            <Title/>
            <Bracket sounder={({id}:{id:string})=>play({id})} />
            <Records/>
        </div>
    )
}