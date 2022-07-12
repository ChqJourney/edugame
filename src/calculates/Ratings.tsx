import React, { useContext, useEffect } from "react";
import { CalculatorContext } from "../operations/CalculatorContext";

export const Ratings = ({ duration}: { duration: number}) => {
    
    const { state } = useContext(CalculatorContext)
    const { roundTime } = state
    
    let num = 0
    if (duration >roundTime / 2) {
        num = 5
    }
    if (duration < roundTime / 2 && duration > roundTime * 1 / 4) {
        num = 4
    }
    if (duration <roundTime *  1 / 4 && duration >roundTime * 1 / 8) {
        num = 3
    }


    return (
        <div className="flex justify-center gap-8 pt-4 pb-1">
            {[...Array(num)].map((v, i) => <Star key={i} />)}
            {num === 5 ? "" : [...Array(5 - num)].map((v, i) => <StarOutline key={i} />)}
        </div>
    )

}

const StarOutline = () => {

    return (
        <svg className="h-6 w-6 fill-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26195" width="200" height="200"><path d="M512 61.44l-29.44 70.08L380.928 372.48l-317.44 34.56 237.44 224-67.52 330.432L512 792l278.272 169.472-67.264-330.496 237.248-224-317.248-34.496z m0 164.8L598.72 432l217.024 23.488-162.496 153.536 44.992 221.44L512 717.056l-186.496 113.536 45.248-221.504-162.24-153.536 216.768-23.488z" p-id="26196"></path></svg>
    )
}

const Star = () => {

    return (
        <svg className="h-6 w-6 fill-pink-600" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26542" width="200" height="200"><path d="M93.013333 420.693333A20.906667 20.906667 0 0 1 85.333333 397.653333l3.413334-10.666666a20.906667 20.906667 0 0 1 18.773333-14.933334l272.64-21.76 104.533333-251.306666a21.76 21.76 0 0 1 21.76-13.653334h11.093334a20.906667 20.906667 0 0 1 20.053333 13.653334l104.96 251.306666 272.64 21.76a20.906667 20.906667 0 0 1 18.773333 14.933334l3.413334 10.666666a20.906667 20.906667 0 0 1-6.4 23.04L725.333333 597.333333l63.146667 264.96a21.76 21.76 0 0 1-8.106667 22.613334l-12.373333 6.826666a21.333333 21.333333 0 0 1-23.893333 0L512 750.933333l-233.386667 142.08a21.333333 21.333333 0 0 1-23.893333 0l-9.386667-6.4a21.76 21.76 0 0 1-8.106666-22.613333L298.666667 597.333333z" p-id="26543"></path></svg>
    )
}