import React, {Dispatch } from "react";
import { PyTi } from "../pinyin/pyInterface";
import { PinyinAction } from "./PinyinReducer";

export const initPinyinState:PinyinState={status:'idle',userName:localStorage.getItem('user')??"Hi friend~",mode:'声母',tis:[],currentIdx:0,tiQuantity:10,modal:{showMsg:false}};

export interface PinyinReducerProps{
    state:PinyinState
    dispatch:Dispatch<PinyinAction>
}

export const PinyinContext=React.createContext<PinyinReducerProps>({state:initPinyinState,dispatch:()=>undefined});

export interface PinyinState {
    userName:string
    status: string
    mode:string
    tis:PyTi[]
    currentIdx:number
    tiQuantity:number
    modal:{showMsg:boolean,msg?:string}
  }
