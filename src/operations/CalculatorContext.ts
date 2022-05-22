import React, {Dispatch } from "react";
import { CalculatorAction } from "./CalculatorReducer";

export const initCalculatorState:CalculatorState={status:'idle',calType:'I',total:0,current:0,input:undefined};

export interface CalculatorReducerProps{
    state:CalculatorState
    dispatch:Dispatch<CalculatorAction>
}

export const CalculatorContext=React.createContext<CalculatorReducerProps>({state:initCalculatorState,dispatch:()=>undefined});



export interface CalculatorState {
    status: string
    calType:string
    total:number
    current:number
    input:any
  }