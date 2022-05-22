import React, { useContext } from "react";
import { FocusContext } from "../operations/FocusContext";
import { Block } from "./block";

export const Bracket = () => {
    const { state } = useContext(FocusContext)
    return (
        <div className="mx-1 md:mx-4">
            

            <Blocks arr={state.arr??[]}  dimension={state.dimension} status={state.status} />
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

export const Blocks = ({ dimension, status,arr }: { dimension: number, status: string,arr:number[] }) => {
    const cols=dimension;
    
    return (
        <div style={{display:"grid",gridTemplateColumns:`repeat(${cols}, minmax(0, 1fr))`,gap:"10px"}}>
            {arr.map((val, idx) => <Block key={idx} status={status} num={val} />)}
        </div>
    )
}