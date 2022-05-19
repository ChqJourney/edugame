import React from "react";
import { Keyboard } from "./keyboard";
import { Screen } from "./screen";

export const CalculatorContainer=()=>{

    return (
        <div className="container mx-auto">
            <Screen/>
            <Keyboard/>
        </div>
    )
}