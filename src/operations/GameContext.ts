import React, {Dispatch } from "react";
import { createRandomArray } from "../components/bracket";
import { Action, State } from "./GameReducer";

export const initState:State={status:'idle',roundTime:60,btnText:'Start',dimension:3,arr:createRandomArray(9),leftTime:10000};

export interface GameReducerProps{
    state:State
    dispatch:Dispatch<Action>
}

export const GameContext=React.createContext<GameReducerProps>({state:initState,dispatch:()=>undefined});