import React, {Dispatch } from "react";
import { PyTi } from "../pinyin/pyInterface";
import { PinyinAction } from "./PinyinReducer";

export const initPinyinState:PinyinState={status:'idle',mode:'single',tis:[],currentIdx:1};

export interface PinyinReducerProps{
    state:PinyinState
    dispatch:Dispatch<PinyinAction>
}

export const PinyinContext=React.createContext<PinyinReducerProps>({state:initPinyinState,dispatch:()=>undefined});

export interface PinyinState {
    status: string
    mode:string
    tis:PyTi[]
    currentIdx:number
  }
