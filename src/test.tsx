import React from "react";
import { Timer } from "./common/timer";

export const Test=()=>{
    const [operation,setOperation]=React.useState("idle")
    return (
        <div>
            <div>
                <button className="h-12 w-24 bg-lime-400" onClick={()=>setOperation('running')}>Start</button>
                <button className="h-12 w-24 bg-amber-400" onClick={()=>setOperation('stop')}>Stop</button>
                <button className="h-12 w-24 bg-red-400" onClick={()=>setOperation('success')}>Success</button>
                <button className="h-12 w-24 bg-blue-400" onClick={()=>setOperation('idle')}>Idle</button>
            </div>
            <Timer duration={30} operation={operation} warningFromLeftSeconds={5} onSuccessCallback={()=>console.log('success')} onIntervalCallback={()=>console.log('interval')}
             onTimeoutCallback={()=>console.log('timeout')}/>
        </div>
    )
}