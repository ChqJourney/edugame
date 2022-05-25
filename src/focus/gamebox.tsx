import React from "react";
import useSound from "use-sound";
import { Bracket } from "./bracket";
import { Controller } from "./controller";
import { InfoBar } from "./infoBar";
import { Records } from "./records";
import { Title } from "./title";

export const GameBox = () => {
    console.log('redner gamebox')
    const [play]=useSound('assets/sounds/effects.mp3',{sprite:{
        'success':[316,2100],
        'wrong':[2824,1700],
        'correct':[6334,1200],
        'timeout':[7686,2100]
    }})
    return (
        <div className="flex flex-col relative justify-start justify-items-start overflow-y-hidden h-screen lg:w-[600px] md:mx-auto">
            <Title/>
            <Bracket sounder={(id:any)=>play(id)} />
            <Records/>
            
        </div>
    )
}