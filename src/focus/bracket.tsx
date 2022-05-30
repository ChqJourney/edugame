import React, { useContext } from "react";
import { FocusContext } from "../operations/FocusContext";
import { Block } from "./block";
import { Controller } from "./controller";

export const Bracket = ({sounder}:{sounder:({id}:{id:string})=>void}) => {
    const { state } = useContext(FocusContext)
    return (
        <div className="mt-1">
<Controller sounder={sounder}/>
        <div className="mx-2 grow md:mx-4">
            

            <Blocks sounder={sounder} arr={state.arr??[]}  dimension={state.dimension} status={state.status} />
        </div>
            </div>
    )
}
export function createRandomArray(num:number):number[]{

    let arr=[...Array(num)].map((val,idx)=>idx+1)
    for (var i = 0, len = arr.length; i < len; i++) {
        var rand = parseInt((Math.random() * len).toString());
        var temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr
}

export const Blocks = ({ dimension, status,arr,sounder }: { dimension: number, status: string,arr:number[],sounder:({id}:{id:string})=>void }) => {
    const cols=dimension;
    
    return (
        <div style={{display:"grid",gridTemplateColumns:`repeat(${cols}, minmax(0, 1fr))`,gap:"10px"}}>
            {arr.map((val, idx) => <Block sounder={sounder} key={idx} status={status} num={val} />)}
        </div>
    )
}