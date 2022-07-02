import React, { useContext } from "react";
import { PinyinContext } from "../operations/PinyinContext";

export const Judge = ({ show }: { show: boolean }) => {
    const { state } = useContext(PinyinContext)
    if (!show) return (<div className='flex justify-center w-20 h-16'>
    
</div>)
    else {
        if (state.tis[state.currentIdx].userAnswerIndex === state.tis[state.currentIdx].answerIndex) {
            return (
                <div className='flex justify-center'>
                    <button className='bg-sky-500 rounded-lg drop-shadow-md w-20 h-16 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 fill-pink-500' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" /></svg>
                    </button>
                </div>
            )
        }else{

            return (
                <div className='flex justify-center'>
                    <button className='bg-sky-500 rounded-lg drop-shadow-md w-20 h-16 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 fill-pink-500' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" /></svg>
                    </button>
                </div>
            )
        }

    }
}