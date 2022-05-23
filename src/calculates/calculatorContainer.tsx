import React, { useReducer } from "react";
import { CalculatorContext, initCalculatorState } from "../operations/CalculatorContext";
import { CalculatorReducer } from "../operations/CalculatorReducer";
import { Keyboard } from "./keyboard";
import { Screen } from "./screen";

export const CalculatorContainer=()=>{
    const [state, dispatch] = useReducer(CalculatorReducer, initCalculatorState);
    return (
        <CalculatorContext.Provider value={{state,dispatch}}>

        <div className="container mx-auto h-screen bg-zinc-300">
            
            <Screen question="5+5"/>
            <Keyboard/>
        </div>
        </CalculatorContext.Provider>
    )
}

