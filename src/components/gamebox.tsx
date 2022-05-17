import React, { useContext } from "react";
import { Bracket } from "./bracket";
import { Controller } from "./controller";
import { InfoBar } from "./infoBar";
import { Records } from "./records";
import { Title } from "./title";

export const GameBox = () => {
    return (
        <div className='py-10'>
            <Title/>
            <Controller  />
            <InfoBar/>
            <Bracket />
            <Records/>
        </div>
    )
}