import React, { useContext, useState } from "react";
import { GameContext } from "../operations/GameContext";

export const Block = ({  num, status }: { num: number, status: string }) => {
    const {state,dispatch}=useContext(GameContext)
    let content:any = "#"
    switch (status) {
        case 'idle':
            content = "#";
            break;
        case 'running':
            content = num;
            break;
        case 'out':
            content = "*";
            break;
        default:
            break;
    }
    const handleClick = () => {
        if(status==='running'){
            let modifiedArr=[];
            const answer=findMin(state.arr);
            if(num===answer){
                 modifiedArr=state.arr.map((val)=>{
                    if(val===num){
                        return 0
                    }
                    return val
                })
                
                    dispatch({type:'block_click',arr:modifiedArr})
                
            }
        }
    }
    return (
        <button className="square" onClick={handleClick}>{content}</button>
    )


}

function findMin(numArr:number[]):number{
    let temp=numArr.length
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]!=0){
            if(numArr[i]<temp){
                temp=numArr[i]
            }
        }
    }
    return temp
}