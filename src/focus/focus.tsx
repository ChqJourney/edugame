import React, { useReducer } from 'react'
import { FocusContext, initState } from '../operations/FocusContext'
import { FocusReducer } from '../operations/FocusReducer';
import { GameBox } from './gamebox'

export const Focus=()=>{
  console.log('redner foucs')
    const [state, dispatch] = useReducer(FocusReducer, initState);
    return (
        <FocusContext.Provider value={{ state, dispatch }}>
        <GameBox />
      </FocusContext.Provider>
    )
}