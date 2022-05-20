import React, {Dispatch } from "react";
import { createRandomArray } from "../focus/bracket";
import { Action, State } from "./GameReducer";

export const initState:State={status:'idle',roundTime:30,btnText:'Start',dimension:3,arr:createRandomArray(9),leftTime:10000,recordLevel:"3 x 3",records:[]};

export interface GameReducerProps{
    state:State
    dispatch:Dispatch<Action>
}

export const GameContext=React.createContext<GameReducerProps>({state:initState,dispatch:()=>undefined});