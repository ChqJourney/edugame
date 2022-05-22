import React from "react";
import { Keyboard } from "./keyboard";
import { Screen } from "./screen";

export const CalculatorContainer=()=>{

    return (
        <div className="container mx-auto h-screen bg-zinc-300">
            
            <Screen question="5+5"/>
            <Keyboard/>
        </div>
    )
}

