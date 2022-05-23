import React, { useContext } from 'react'
import { CalculatorContext } from '../operations/CalculatorContext'
import { Ratings } from './Ratings'

export const Screen=({question}:{question:string})=>{
    const {state,dispatch} = useContext(CalculatorContext)
    return (
        <div className='w-full bg-sky-600 pb-2 pt-18'>

                <Ratings/>
            <div className=' h-full flex justify-center items-center bg-sky-800 mx-2 rounded-lg py-4 relative'>
                <div className='absolute right-6 top-1 text-xl text-lime-600'>1 / 5</div>
                {Array.from(state.input).map((v,i)=><DisplayUnit content={v} key={i}/>)}
            </div>
        </div>
        )
}

const DisplayUnit=({content}:{content:any})=>{

    return (
        <div className='h-24 w-20 text-3xl  font-sans text-white flex justify-center items-center'>
            {content}
        </div>
    )
}
