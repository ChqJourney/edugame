import React, {Dispatch } from "react";
import { CalculatorAction, Pigai } from "./CalculatorReducer";

export const initCalculatorState:CalculatorState={status:'idle',userName:localStorage.getItem('user')??"Hi friend~",roundTime:60,calType:'简单',total:10,current:1,input:" ",tis:[],infos:[],showMsg:false,modal:undefined,duration:1200};

export interface CalculatorReducerProps{
    state:CalculatorState
    dispatch:Dispatch<CalculatorAction>
}

export const CalculatorContext=React.createContext<CalculatorReducerProps>({state:initCalculatorState,dispatch:()=>undefined});

export interface CalculatorState {
    status: string
    userName:string
    calType:string
    total:number
    current:number
    tis:Pigai[]
    input:string,
    infos:any[],
    showMsg:boolean,
    modal:any,
    roundTime:number,
    duration:number
  }

  export enum CalStatus{
      functioning,
      need_input
  }