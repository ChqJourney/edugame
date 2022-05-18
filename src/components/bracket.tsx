import React, { useContext, useEffect } from "react";
import { GameContext } from "../operations/GameContext";
import { Block } from "./block";

export const Bracket = () => {
    const { state } = useContext(GameContext)
    console.log(state)
    return (
        <div className="mx-1 md:mx-4">

            <Blocks arr={state.arr}  dimension={state.dimension} status={state.status} />
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
    console.log("render blocks")
    const cols=dimension;
    const cells=dimension*dimension;
    console.log(cols)
    console.log(cells)
    
    return (
        <div style={{display:"grid",gridTemplateColumns:`repeat(${cols}, minmax(0, 1fr))`,gap:"10px"}}>
            {arr.map((val, idx) => <Block key={idx} status={status} num={val} />)}
        </div>
    )
}