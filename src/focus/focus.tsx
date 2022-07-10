import React, {  useReducer } from 'react'
import { FocusContext } from '../operations/FocusContext'
import { FocusReducer, FocusState } from '../operations/FocusReducer';
import { createRandomArray } from './bracket';
import { GameBox } from './gamebox'

export const Focus = () => {
  const initState: FocusState =
  {
    userName:localStorage.getItem('user')??"Hi friend~",
    status: 'idle',
    roundTime: 30, 
    btnText: 'Start', 
    dimension: 3, 
    arr: createRandomArray(9), 
    leftTime: 10000, 
    recordLevel: "3 x 3", 
    records: [], 
    modalVisible:false,
    actionSheetVisible:false
  };

  const [state, dispatch] = useReducer(FocusReducer, initState);
  return (
    <FocusContext.Provider value={{ state, dispatch }}>
      <GameBox />
      
    </FocusContext.Provider>
  )
}