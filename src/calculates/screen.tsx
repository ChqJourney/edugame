import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalculatorContext } from '../operations/CalculatorContext'
import { Pigai } from '../operations/CalculatorReducer'
import { Ratings } from './Ratings'
import { Timer } from '../common/timer'
import { combineToLimiteRecords, createSingleRecord, saveRecords } from '../common/funcs/records'

export const Screen = ({ sounder }: { sounder: ({ id }: { id: string }) => void }) => {
    const navigate=useNavigate()
    const { state,dispatch } = useContext(CalculatorContext)
    const successAction=(sec:number)=>{
        console.log('suc')
        if(sec!==0){

            // dispatch({ type: 'fn_setDuration', duration: sec })
            const newRecord=createSingleRecord({parameter:state.roundTime-sec,creator:state.userName})
            const rs=combineToLimiteRecords(state.infos??[],newRecord,10);
            dispatch({type:'fn_setRecords',infos:rs})
            var key=`${state.calType}${state.total}`
            saveRecords('records-calculator',key,rs)
        }
        // var str=localStorage.getItem('records-calculator');
        // let obj:any=str?JSON.parse(str):{}
        // obj[key]=[...rs]
        // localStorage.setItem('records-calculator',JSON.stringify(obj))
    }
    const timeoutAction=()=>{
        sounder({ id: 'timeout' })
        setTimeout(() => {
            dispatch({type:'fn_reset'})
        }, 3000);
    }
    return (
        <div className='w-full lg:w-[500px] h-full bg-sky-600 pb-2 pt-18'>
            <div className='flex items-center justify-between px-4'>

            <button className="" onClick={()=>navigate('/')}>
                <svg className="h-10 w-10 fill-orange-500" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3135" width="200" height="200"><path d="M904.699382 574.392002l58.97416-58.97416-118.529557-118.520347 0.005117-213.882252-81.07041 0 0.00307 132.827191L513.284761 65.066925l-1.11438 1.113357-1.113357-1.113357L60.696896 515.416819l58.993602 58.95574 70.992891-70.991868 0.008186 456.137715 81.050967 0L271.742543 959.485661l492.354568 0.027629 0 0.005117 81.032548 0 0 0 0.019443 0L845.149101 878.429577l-0.017396 0 0.00921-363.590925L904.699382 574.392002zM764.095064 878.434693l-168.609139 0.010233L595.485925 607.621824l-166.594249 0 0 270.831288-157.149133 0.00921 0-456.138738 239.313457-239.308341 1.113357 1.113357 1.11438-1.113357 250.80007 250.77551L764.095064 878.434693z" p-id="3136"></path></svg>
                </button>
                <Ratings duration={state.duration} />
            </div>
            <div className=' h-full flex justify-center items-center bg-sky-800 mx-2 rounded-lg py-2 relative'>
                {state.tis.length === 0 ? "" 
                : <div className='absolute left-2 top-1 text-lg font-bold text-orange-600'>
                    <Timer operation={state.status} duration={state.roundTime} warningFromLeftSeconds={5} onSuccessCallback={successAction} onTimeoutCallback={timeoutAction}/>
                    </div>
                    }
                {state.tis.length === 0 ? "" : <div className='absolute right-6 top-1 text-xl sm:text-3xl text-lime-600'>{state.current} / {state.total}</div>}
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
        <div className='h-24 w-8 sm:h-48 sm:w-24 text-4xl sm:text-6xl font-sans text-white flex justify-center items-center'>
            {content}
        </div>
    )
}
const ErrorZone = ({ tis }: { tis: Pigai[] }) => {

    return (
        <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-4 flex space-x-1 sm:space-x-4">
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
        <button onClick={errorClick} className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-gray-400 text-lg text-center text-red-600 flex justify-center items-center p-0">{idx + 1}</button>
    )
}