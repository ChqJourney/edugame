import React from "react";

export const Keyboard=()=>{

    return (
        <div style={{display:"grid",gridTemplateColumns:`repeat(4, minmax(0, 1fr))`,gap:"10px"}}>
            {[...Array(16)].map((val, idx) => <KeySlot key={idx} />)}
        </div>
    )
}

const KeySlot=()=>{

    return (
        <div className="border w-full p-[33%]">
            1
        </div>
    )
}