import React, { useEffect, useState } from "react";


export const Timer = ({ duration = 60, warningFromLeftSeconds = 0, operation, onIntervalCallback = (second) => { },onSuccessCallback=(second)=>{}, onTimeoutCallback = () => { } }
: { duration: number, warningFromLeftSeconds: number, operation: string, onIntervalCallback?: (second:number) => void,onSuccessCallback?:(second:number)=>void, onTimeoutCallback?: () => void }) => {
    const [sec, setTime] = useState(duration)
    const [reminder, setReminder] = useState(false)
    useEffect(() => {
        let interval: any = null;
        switch (operation) {
            case 'running':
                if (sec !== 0) {
                    interval = setInterval(() => setTime(sec => sec - 1), 1000)
                    onIntervalCallback(sec)
                    if (sec <= warningFromLeftSeconds) {
                        setReminder(true)
                    }
                } else {
                    clearInterval(interval)
                    setReminder(false)
                    setTime(sec=>duration)
                    onTimeoutCallback()
                }
                break
            case 'stop':
                break
            case 'success':
                setReminder(false)
                onSuccessCallback(sec)
                setTime(sec=>duration)
                break
            default:
                break
        }

        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [sec, operation,duration])


    return (
        <div className={`${reminder ? "animate-pulse border-red-500" : "border-sky-400"} text-2xl w-24 border-2 text-center rounded-md px-2 mx-1 justify-center text-lime-700 flex items-center font-sans font-semibold`}>
            {timeFormat(sec)}
        </div>
    )
}

export const timeFormat = (t: number = 0) => {
    let initNum = t % 3600;
    const sec = initNum % 60;
    const min = Math.floor(t / 60)
    const secStr = sec < 10 ? `0${sec}` : sec;
    const minStr = min < 10 ? `0${min}` : min;
    return `${minStr}:${secStr}`;
}