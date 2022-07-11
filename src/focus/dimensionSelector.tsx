import React, { useContext } from "react";
import { ActionSheet } from "../common/actionSheet";
import { FocusContext } from "../operations/FocusContext";
import { createRandomArray } from "./bracket";

export const DimensionSelector = () => {
    const { state, dispatch } = useContext(FocusContext)
    function confirmDimension(idStr:string){
        idStr=idStr.substring(0,1)
        console.log(createRandomArray(parseInt(idStr) * parseInt(idStr)))
        if (state.status !== 'running') {
            dispatch({ type: 'set_game_parameter', dimension: parseInt(idStr), roundTime: fitRoundTime(parseInt(idStr)), arr: createRandomArray(parseInt(idStr) * parseInt(idStr)) })
        }
        dispatch({ type: 'set_game_records', recordLevel: `${idStr} x ${idStr}`, records: JSON.parse(localStorage.getItem('records-focus') ?? "")[`${idStr} x ${idStr}`] })
        dispatch({type:'showActionSheet',visible:false})
      }
      function cancelAction(){
        dispatch({type:'showActionSheet',visible:false})
      }
    return (
        <div className="w-24 border outline-none rounded-md mx-1 text-xl cursor-pointer flex items-center justify-center hover:scale-105" onClick={()=>dispatch({type:'showActionSheet',visible:true,actionSheet:<ActionSheet options={["3 x 3","4 x 4","5 x 5", "6 x 6"]} confirmCallback={confirmDimension} cancelCallback={cancelAction}/> })}>
            {state.dimension} x {state.dimension}
        </div>
    )
}
function fitRoundTime(di: number): number {
    switch (di) {
        case 3:
            return 30
        case 4:
            return 60
        case 5:
            return 90
        case 6:
            return 120
        default:
            return 60
    }
}