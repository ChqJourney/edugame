import React, { useContext, useEffect, useState } from 'react'
import { FocusContext } from '../operations/FocusContext'
import { createRandomArray } from './bracket'
//react-hooks/exhaustive-deps

export const TimerDisplay = ({ time, status }: { time: number, status: string }) => {
    const { state, dispatch } = useContext(FocusContext)
    const [sec, setTime] = useState(time)
    

    useEffect(() => {
        let interval: any = null;
        if(state.status.includes('running')){
            console.log('in')
            if (state.arr?.some(val => val !== 0)) 
                if (sec !== 0) {
                    interval = setInterval(() => setTime(sec => sec - 1), 1000)
                } else {
                    clearInterval(interval)
                    dispatch({type:'set_game_status',status:'timeout',btnText:state.btnText,arr:state.arr})
                    setTimeout(() => {
                        dispatch({type:'set_game_status',status:'idle',btnText:'Start',arr:state.arr})
                        dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:state.dimension,arr:createRandomArray(state.dimension*state.dimension)})
                        dispatch({type:'set_game_status',status:'idle',btnText:state.btnText,leftTime:0,arr:state.arr})
                    }, 2500);
                }
            }else if(state.status==='idle'||state.status==='portal'){
            setTime(sec=>state.roundTime)
        }else if(state.status==='success'){
            setTime(sec)
            setTimeout(() => {
                dispatch({type:'set_game_status',status:'idle',btnText:'Start',leftTime:state.leftTime,arr:state.arr})
                dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:state.dimension,arr:createRandomArray(state.dimension*state.dimension)})
                dispatch({ type: 'set_game_status', status:'idle',btnText:'Start',leftTime: sec,arr:state.arr})
            }, 2500);
            const rs=validateAndPersistanceRecords(state.records??[],{time:state.roundTime-sec,createdAt:new Date().toLocaleString()});
            dispatch({type:'set_game_records',recordLevel:`${state.dimension} x ${state.dimension}`,records:rs})
            var level=`${state.dimension.toString()} x ${state.dimension.toString()}`
            var str=localStorage.getItem('records');
            let obj:any=str?JSON.parse(str):{}
            obj[level]=[...rs]
            localStorage.setItem('records',JSON.stringify(obj))
        }
        return () => clearInterval(interval)
         // eslint-disable-next-line
    }, [sec, status])

    useEffect(()=>{
        dispatch({type:'set_game_status',status:'idle',btnText:state.btnText,arr:state.arr})
         // eslint-disable-next-line
    },[time])
    return (
        <>
        <div className="text-lg border-4 border-sky-300 rounded-md px-2 mx-1 text-orange-500 flex items-center font-mono font-semibold">
            {timeFormat(sec)}
        </div>
        
        </>
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