import React, { useContext } from 'react'
import { CalculatorContext } from '../operations/CalculatorContext'
import { Pigai } from '../operations/CalculatorReducer'
import { Ratings } from './Ratings'

export const Screen = () => {
    const { state } = useContext(CalculatorContext)
    console.log(state.tis)
    return (
        <div className='w-full bg-sky-600 pb-2 pt-18'>

            <Ratings />
            <div className=' h-full flex justify-center items-center bg-sky-800 mx-2 rounded-lg py-2 relative'>
                {state.tis.length === 0 ? "" : <div className='absolute right-6 top-1 text-xl text-lime-600'>{state.current} / {state.total}</div>}
                {state.total === 0 ? <div className='h-24 text-lg flex items-center'>Press mode button to start</div> : (
                    <>
                        <DisplayUnit content={state.tis[state.current - 1]?.num1 ?? " "} />
                        <div className='w-4'></div>
                        <DisplayUnit content={state.tis[state.current - 1]?.operator ?? " "} />
                        <div className='w-4'></div>
                        <DisplayUnit content={state.tis[state.current - 1]?.num2 ?? " "} />
                        <div className='w-4'></div>
                        <DisplayUnit content={state.tis[state.current - 1] ? "=" : ""} />
                    </>
                )}
                <div className='w-4'></div>
                {state.tis[state.current - 1]?.verdict
                    ?  Array.from(state.tis[state.current - 1].answer.toString()).map((v, i) => <DisplayUnit content={v} key={i} />)
                    : Array.from(state.input).map((v, i) => <DisplayUnit content={v} key={i} />)}
                <ErrorZone tis={state.tis} />
            </div>
        </div>
    )
}

const DisplayUnit = ({ content }: { content: any }) => {

    return (
        <div className='h-24 w-8 text-3xl font-sans text-white flex justify-center items-center'>
            {content}
        </div>
    )
}
const ErrorZone = ({ tis }: { tis: Pigai[] }) => {

    return (
        <div className="absolute bottom-1 left-1 flex space-x-1">
            {tis.map((v, i) => {
                if (v.verdict === false) {
                    return <ErrorIndicator idx={i} key={i} />
                }
            })}
        </div>
    )
}
const ErrorIndicator = ({ idx }: { idx: number }) => {
    return (
        <div className="w-8 h-8 rounded-md bg-gray-700 text-lg text-center text-red-500 flex justify-center items-center p-0">{idx + 1}</div>
    )
}