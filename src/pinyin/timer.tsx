import React, { useContext, useEffect, useState } from "react";
import { timeFormat } from "../focus/timeDisplay";
import { PinyinContext } from "../operations/PinyinContext";

export const Timer=({time,status,sounder}:{time:number,status:string,sounder:({id}:{id:string})=>void})=>{
    const {state,dispatch}=useContext(PinyinContext)
    const [sec, setTime] = useState(time)
    const [reminder,setReminder]=useState(false)
    useEffect(() => {
        let interval: any = null
        if (state.status === 'running') {
            if (sec !== 0) {
                interval = setInterval(() => setTime(sec => sec - 1), 1000)
                if(sec<10){
                    setReminder(true)
                    setTimeout(()=>setReminder(false),300)
                }
            } else {
                sounder({ id: 'timeout' })
                setReminder(false)
                setTimeout(() => {
                    dispatch({type:'fn_reset'})
                }, 3000);
                //TODO: 超时action 实现
            }
        }
        if(state.status==='success'){
            sounder({ id: 'success' })
            setTimeout(() => {
                dispatch({type:'fn_reset'})
            }, 3000);
        }
        
        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [sec, time, status])
    return (
        <div className='text-lg font-bold text-orange-600'>
        <div className={`${reminder?"shake text-red-600":""} font-san`}>
            {timeFormat(sec)}
        </div>
        </div>
    )
}