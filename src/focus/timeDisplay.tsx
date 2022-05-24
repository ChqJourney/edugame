import React, { useContext, useEffect, useState } from 'react'
import { FocusContext } from '../operations/FocusContext'
import { createRandomArray } from './bracket'
//react-hooks/exhaustive-deps

export const TimerDisplay = ({ time, status,sounder }: { time: number, status: string,sounder:(id:any)=>void }) => {
    const { state, dispatch } = useContext(FocusContext)
    const [sec, setTime] = useState(time)
    const [reminder,setReminder]=useState(false)
    useEffect(() => {
        let interval: any = null;
        if(state.status.includes('running')){
            if (state.arr?.some(val => val !== 0)) 
                if (sec !== 0) {
                    interval = setInterval(() => setTime(sec => sec - 1), 1000)
                    if(sec<6){
                        setReminder(true)
                    }
                } else {
                    clearInterval(interval)
                    sounder({id:'timeout'})
                    setReminder(false)
                    dispatch({type:'set_game_status',status:'timeout',btnText:'Start',arr:state.arr})
                    setTimeout(() => {
                        dispatch({type:'set_game_status',status:'idle',leftTime:state.leftTime,arr:state.arr,btnText:'Start'})
                        dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:state.dimension,arr:createRandomArray(state.dimension*state.dimension)})
                        
                    }, 2000);
                }
            }else if(state.status==='idle'){
            setTime(sec=>state.roundTime)
        }else if(state.status==='success'){
            setTime(sec)
            setReminder(false)
            setTimeout(() => {
                dispatch({type:'set_game_status',status:'idle',leftTime:sec,btnText:'Start'})
                dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:state.dimension,arr:createRandomArray(state.dimension*state.dimension)})
                // dispatch({ type: 'set_game_status', status:'idle',btnText:'Start',leftTime: sec,arr:state.arr})
            }, 2000);
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
    }, [sec, status,time])

    useEffect(()=>{
        dispatch({type:'set_game_status',status:'idle',btnText:state.btnText,arr:state.arr})
         // eslint-disable-next-line
    },[time])
    return (
        <div className={`${reminder?" animate-pulse border-red-500":"border-sky-400"} text-2xl w-24 border-2 text-center rounded-md px-2 mx-1 justify-center text-lime-700 flex items-center font-sans font-semibold`}>
            {timeFormat(sec)}
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