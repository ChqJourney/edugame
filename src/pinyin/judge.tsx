import React, { useContext } from "react";
import { PinyinContext } from "../operations/PinyinContext";

export const Judge = ({ show,sounder }: { show: boolean,sounder:({id}:{id:string})=>void }) => {
    const { state } = useContext(PinyinContext)
    console.log(state.tis[state.currentIdx].answerIndex)
    console.log(state.tis[state.currentIdx].userAnswerIndex)
    if (!show) return (<div className='flex justify-center w-20 h-16'>
    
</div>)
    else {
        if (state.tis[state.currentIdx].userAnswerIndex === state.tis[state.currentIdx].answerIndex) {
            sounder({id:"correct"})
            return (
                <div className='flex justify-center'>
                    <button className='bg-sky-500 rounded-lg drop-shadow-md w-20 h-16 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 fill-pink-500' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" /></svg>
                    </button>
                </div>
            )
        }else{
            sounder({id:"wrong"})
            return (
                <div className='flex justify-center'>
                    <button className='bg-sky-500 rounded-lg drop-shadow-md w-20 h-16 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 fill-pink-500' viewBox="0 0 24 24"><g data-name="5.Cancel"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" /><path d="m7.292 8.707 1.415-1.414 8 8-1.414 1.414z" /><path d="m7.292 15.293 8-8 1.415 1.414-8 8z" /></g></svg>
                    </button>
                </div>
            )
        }

    }
}