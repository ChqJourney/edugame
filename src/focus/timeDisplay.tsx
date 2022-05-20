import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../operations/GameContext'
import { createRandomArray } from './bracket'


export const TimerDisplay = ({ time, status }: { time: number, status: string }) => {
    const { state, dispatch } = useContext(GameContext)
    const [sec, setTime] = useState(time)

    useEffect(() => {
        let interval: any = null;
        if(state.status==='running'){

            if (state.arr.every(val => val === 0)) {
                dispatch({ type: 'finished', leftTime: sec })
                dispatch({ type: 'set_game_status', status: 'idle', btnText: 'Start' })
                dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:state.dimension,arr:createRandomArray(state.dimension*state.dimension)})
                const rs=validateAndPersistanceRecords(state.records??[],{time:state.roundTime-sec,createdAt:new Date().toLocaleString()});
                dispatch({type:'set_game_records',recordLevel:`${state.dimension} x ${state.dimension}`,records:rs})
                var level=`${state.dimension.toString()} x ${state.dimension.toString()}`
                var str=localStorage.getItem('records');
                let obj:any=str?JSON.parse(str):{}
                obj[level]=[...rs]
                localStorage.setItem('records',JSON.stringify(obj))
            } else {
                if (sec !== 0) {
                    interval = setInterval(() => setTime(sec => sec - 1), 1000)
                } else {
                    clearInterval(interval)
                    dispatch({type:'set_game_status',status:'timeout',btnText:state.btnText})
                    setTimeout(() => {
                        dispatch({type:'set_game_status',status:'idle',btnText:'Start'})
                        dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:state.dimension,arr:createRandomArray(state.dimension*state.dimension)})
                        dispatch({ type: 'finished', leftTime: 0 })
                    }, 2500);
                }
            }
        }
        if(state.status==='idle'){
            setTime(sec=>state.roundTime)
        }
        return () => clearInterval(interval)
    }, [sec, status])

    useEffect(()=>{
        dispatch({type:'set_game_status',status:'idle',btnText:state.btnText})
    },[time])
    return (
        <div className="text-lg border-4 border-sky-300 rounded-md px-2 mx-1 text-orange-500 flex items-center font-mono font-semibold">
            {status === 'running' ? timeFormat(sec) : "00:00"}
        </div>
    )
}

export const validateAndPersistanceRecords=(records:any[],newRecord:any):any[]=>{
    let newArr=records.concat([newRecord])
    return newArr.sort((a,b)=>a.time-b.time).slice(0,9);
}

export const timeFormat = (t: number = 0) => {
    let initNum = t % 3600;
    const sec = initNum % 60;
    const min = Math.floor(t / 60)
    const secStr = sec < 10 ? `0${sec}` : sec;
    const minStr = min < 10 ? `0${min}` : min;
    return `${minStr}:${secStr}`;
}