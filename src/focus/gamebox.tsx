import React, { useContext, useEffect } from "react";
import useSound from "use-sound";
import { FocusContext } from "../operations/FocusContext";
import { Bracket, createRandomArray } from "./bracket";
import { Records } from "./records";
import { Title } from "./title";
import Modal from 'react-modal'
import { Prompt } from "../common/prompt";

export const GameBox = () => {
    const {state,dispatch}=useContext(FocusContext);
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
        dispatch({type:'showModal',visible:true,modal:<Prompt content='回到游戏？'  positiveCallback={resume} negativeCallback={cancel}/>})
    }
    function resume(){
        dispatch({type:'showModal',visible:false})
        console.log(state.arr)
          dispatch({type:'set_game_status',status:'running',btnText:'Stop',arr:state.arr})
      }
      function cancel(){

        dispatch({type:'set_game_status',status:'idle',btnText:'Start',arr:createRandomArray(state.dimension*state.dimension)})
        dispatch({type:'showModal',visible:false})
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
            <Modal className=" absolute top-[50%] left-[50%] outline-none border border-slate-400 rounded-lg -translate-x-1/2 -translate-y-3/4" shouldCloseOnOverlayClick={false} isOpen={state.modalVisible}>
                {/* <Prompt content='回到游戏？'  positiveCallback={resume} negativeCallback={cancel}/> */}
                {state.modal}
            </Modal>
            <Modal className="h-48 px-2 pt-2 border-red-500 outline-none" shouldCloseOnOverlayClick={false} isOpen={state.actionSheetVisible}>
                {/* <ActionSheet options={["3 x 3","4 x 4","5 x 5", "6 x 6"]} confirmCallback={confirmDimension} cancelCallback={cancelAction}/> */}
                {state.actionSheet}
            </Modal>
        </div>
        
    )
}
function fitRoundTime(di: number): number {
    switch (di) {
        case 3:
            return 30
        case 4:
            return 60
        case 5:
            return 90
        case 6:
            return 120
        default:
            return 60
    }
}