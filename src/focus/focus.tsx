import React, { useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import { FocusContext } from '../operations/FocusContext'
import { FocusReducer, FocusState } from '../operations/FocusReducer';
import { createRandomArray } from './bracket';
import { GameBox } from './gamebox'

export const Focus = () => {
const navigate=useNavigate()
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
  };
  function blur() {
    navigate('/')
}
useEffect(() => {
    window.addEventListener('blur',blur)
    return () => window.removeEventListener('blur',blur)
},[])
  const [state, dispatch] = useReducer(FocusReducer, initState);
  return (
    <FocusContext.Provider value={{ state, dispatch }}>
      <GameBox />
    </FocusContext.Provider>
  )
}