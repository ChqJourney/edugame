import React from "react";
import { Bracket } from "./bracket";
import { Controller } from "./controller";
import { InfoBar } from "./infoBar";
import { Records } from "./records";
import { Title } from "./title";

export const GameBox = () => {
    return (
        <div className="flex flex-col relative h-screen justify-between overflow-y-hidden lg:w-[600px] md:mx-auto">
            <Title/>
            <Controller  />
            <InfoBar/>
            <Bracket />
            <Records/>
            
        </div>
    )
}