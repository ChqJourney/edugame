import React, {Dispatch } from "react";
import { createRandomArray } from "../focus/bracket";
import { Action, FocusState } from "./FocusReducer";

export const initState:FocusState={userName:"",actionSheetVisible:false,modalVisible:false,status:'idle',roundTime:30,btnText:'Start',dimension:3,arr:createRandomArray(9),leftTime:10000,recordLevel:"3 x 3",records:[]};

export interface FocusReducerProps{
    state:FocusState
    dispatch:Dispatch<Action>
}

export const FocusContext=React.createContext<FocusReducerProps>({state:initState,dispatch:()=>undefined})