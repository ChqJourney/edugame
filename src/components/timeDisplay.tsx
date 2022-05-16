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
                dispatch({type:'set_game_parameter',roundTime:state.roundTime,dimension:3,arr:createRandomArray(9)})
                
            } else {
                if (sec !== 0) {
                    interval = setInterval(() => setTime(sec => sec - 1), 1000)
                } else {
                    clearInterval(interval)
                    dispatch({ type: 'finished', leftTime: 0 })
                }
            }
        }
        return () => clearInterval(interval)
    }, [sec, status])

    return (
        <div className="text-lg border-4 border-sky-300 rounded-md px-4 text-orange-500 flex items-center font-mono font-semibold">
            {status === 'running' ? timeFormat(sec) : "00:00"}
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