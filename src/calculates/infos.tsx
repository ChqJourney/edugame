import React, { useContext, useEffect } from "react";
import { CalculatorContext } from "../operations/CalculatorContext";

export const Infos = () => {
    const { state, dispatch } = useContext(CalculatorContext)
    useEffect(() => {
        let localRecordsStr = localStorage.getItem('records-calculator')
        if (localRecordsStr != null) {
            const obj = JSON.parse(localRecordsStr)
            dispatch({ type: "fn_setRecords", infos: obj[`${state.calType}${state.total}`] })
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className="mx-2 md:mx-4 border-t border-lime-500 mt-4 px-2 md:px-4 overflow-y-auto mb-1">
            <div className="font-bold  text-sky-700 sm:text-3xl">Records of {state.calType} x {state.total}题:</div>
            {state.infos && state.infos.map((val: any, idx: number) => <Info key={idx} idx={idx} name={state.userName} createdAt={val.createdAt} time={val.time} />)}
        </div>
    )
}

const Info = ({ idx, name, time, createdAt }: { idx: number, name: string, time: number, createdAt: string }) => {

    return (
        <div className="flex h-full">
            <div className="mr-4">{idx + 1}.</div>
            <div className="mr-2 w-20">{name}</div>
            <div className="font-sans font-semibold mr-4">{time} s</div>
            <div className="">{createdAt}</div>
        </div>
    )
}