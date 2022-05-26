import React, {Dispatch } from "react";
import { CalculatorAction, Pigai } from "./CalculatorReducer";

export const initCalculatorState:CalculatorState={status:'idle',calType:'I',total:10,current:1,input:" ",tis:[]};

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
    tis:Pigai[]
    input:string
  }

  export enum CalStatus{
      functioning,
      need_input
  }