import React, { useContext } from "react";
import { Bracket } from "./bracket";
import { Controller } from "./controller";
import { InfoBar } from "./infoBar";

export const GameBox = () => {
    return (
        <div className='w-[700px]'>
            <Controller  />
            <Bracket />
            <InfoBar/>

        </div>
    )
}