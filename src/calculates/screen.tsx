import React, { useContext } from 'react'
import { CalculatorContext } from '../operations/CalculatorContext'
import { Ratings } from './Ratings'

export const Screen=({question}:{question:string})=>{
    const {state,dispatch} = useContext(CalculatorContext)
    console.log(state.tis)
    return (
        <div className='w-full bg-sky-600 pb-2 pt-18'>

                <Ratings/>
            <div className=' h-full flex justify-center items-center bg-sky-800 mx-2 rounded-lg py-2 relative'>
                <div className='absolute right-6 top-1 text-xl text-lime-600'>{state.current} / {state.total}</div>
                {state.total===0?<div className='h-24 text-lg flex items-center'>Press mode button to start</div>:(
                    <>
                    <DisplayUnit content={state.tis[state.current-1]?.num1??" "}/>
                    <DisplayUnit content={state.tis[state.current-1]?.operator??" "}/>
                    <DisplayUnit content={state.tis[state.current-1]?.num2??" "}/>
                    <DisplayUnit content={state.tis[state.current-1]?"=":""}/>
                    </>
                )}
                
                    {Array.from(state.input).map((v,i)=><DisplayUnit content={v} key={i}/>)}
                
            </div>
        </div>
        )
}

const DisplayUnit=({content}:{content:any})=>{

    return (
        <div className='h-24 w-6 text-2xl font-sans text-white flex justify-center items-center'>
            {content}
        </div>
    )
}
