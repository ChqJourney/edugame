import React, { useContext } from 'react'
import { CalculatorContext } from '../operations/CalculatorContext'
import { Pigai } from '../operations/CalculatorReducer'
import { Ratings } from './Ratings'
import { Timer } from './timer'

export const Screen = ({ sounder }: { sounder: ({ id }: { id: string }) => void }) => {
    const { state } = useContext(CalculatorContext)
    return (
        <div className='w-full lg:w-[500px] h-full bg-sky-600 pb-2 pt-18'>
            <div className='flex items-center justify-center'>

               
                <Ratings duration={state.duration} status={state.status} sounder={sounder} />
            </div>
            <div className=' h-full flex justify-center items-center bg-sky-800 mx-2 rounded-lg py-2 relative'>
                {state.tis.length === 0 ? "" : <div className='absolute left-2 top-1 text-lg font-bold text-orange-600'><Timer sounder={sounder} status={state.status} time={state.roundTime} /></div>}
                {state.tis.length === 0 ? "" : <div className='absolute right-6 top-1 text-xl text-lime-600'>{state.current} / {state.total}</div>}
                {state.tis.length === 0 ? <div className='h-24 text-lg flex items-center sm:text-4xl text-white'>{state.userName}，按开始键游戏......</div> : (
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
                    ? Array.from(state.tis[state.current - 1].answer.toString()).map((v, i) => <DisplayUnit content={v} key={i} />)
                    : Array.from(state.input).map((v, i) => <DisplayUnit content={v} key={i} />)}
                <ErrorZone tis={state.tis} />
            </div>
        </div>
    )
}

const DisplayUnit = ({ content }: { content: any }) => {

    return (
        <div className='h-24 w-8 sm:h-48 sm:w-24 text-6xl font-sans text-white flex justify-center items-center'>
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
                } else { return "" }
            })}
        </div>
    )
}
const ErrorIndicator = ({ idx }: { idx: number }) => {
    const { dispatch } = useContext(CalculatorContext)
    const errorClick = () => {
        dispatch({ type: 'fn_setCurrent', current: idx + 1 })
    }
    return (
        <button onClick={errorClick} className="w-8 h-8 rounded-md bg-gray-700 text-lg text-center text-red-500 flex justify-center items-center p-0">{idx + 1}</button>
    )
}