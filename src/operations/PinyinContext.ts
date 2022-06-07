import React, {Dispatch } from "react";
import { PinyinAction } from "./PinyinReducer";

export const initPinyinState:PinyinState={status:'idle'};

export interface PinyinReducerProps{
    state:PinyinState
    dispatch:Dispatch<PinyinAction>
}

export const PinyinContext=React.createContext<PinyinReducerProps>({state:initPinyinState,dispatch:()=>undefined});

export interface PinyinState {
    status: string
  }
