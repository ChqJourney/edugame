import React, { useContext, useEffect, useState } from "react";
import { timeFormat, validateAndPersistanceRecords } from "../focus/timeDisplay";
import { CalculatorContext } from "../operations/CalculatorContext";

export const Timer = ({ time, status, sounder }: { time: number, status: string, sounder: ({ id }: { id: string }) => void }) => {
    const { state, dispatch } = useContext(CalculatorContext)
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
            }
        }
        if (state.status === 'success') {
            setReminder(false)
            dispatch({ type: 'fn_setDuration', duration: sec })
            const rs=validateAndPersistanceRecords(state.infos??[],{time:state.roundTime-sec,user:state.userName,createdAt:new Date().toLocaleString()});
            dispatch({type:'fn_setRecords',infos:rs})
            var key=`${state.calType}${state.total}`
            var str=localStorage.getItem('records-calculator');
            let obj:any=str?JSON.parse(str):{}
            obj[key]=[...rs]
            localStorage.setItem('records-calculator',JSON.stringify(obj))
        }
        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [sec, time, status])

    
    return (
        <div className={`${reminder?"shake text-red-600":""} font-san text-xl sm:text-3xl`}>
            {timeFormat(sec)}
        </div>
    )
}