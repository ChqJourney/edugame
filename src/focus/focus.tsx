import React, {  useReducer } from 'react'
import { FocusContext } from '../operations/FocusContext'
import { FocusReducer, FocusState } from '../operations/FocusReducer';
import { createRandomArray } from './bracket';
import { GameBox } from './gamebox'
import Modal from 'react-modal';
import { Prompt } from '../common/prompt';

export const Focus = () => {
// const navigate=useNavigate()
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
    modalVisible:false
  };
function resume(){
  dispatch({type:'showModal',visible:false})
  console.log(state.arr)
    dispatch({type:'set_game_status',status:'running',btnText:'Stop',arr:state.arr})
}
function cancel(){
  dispatch({type:'showModal',visible:false})
}
  const [state, dispatch] = useReducer(FocusReducer, initState);
  return (
    <FocusContext.Provider value={{ state, dispatch }}>
      <GameBox />
      <Modal className=" absolute top-[50%] left-[50%] outline-none border border-slate-400 rounded-lg -translate-x-1/2 -translate-y-3/4" shouldCloseOnOverlayClick={false} isOpen={state.modalVisible}>
                <Prompt content='回到游戏？'  positiveCallback={resume} negativeCallback={cancel}/>
            </Modal>
    </FocusContext.Provider>
  )
}