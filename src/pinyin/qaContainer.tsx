import React, { useContext, useEffect, useState } from 'react'
import { PinyinContext } from '../operations/PinyinContext'
import { CardsBracket } from './cardsBracket'
import { Judge } from './judge'

export const QaContainer = ({ sound }: { sound: ({ id }: { id: string }) => void }) => {
    const { state, dispatch } = useContext(PinyinContext)
    const [showJudge,setShowJudge]=useState(false)
    function confirmSelection() {
        setTimeout(() => {
            dispatch({ type: 'fn_setCurrentTi', currentTiIdx: state.currentIdx + 1 })
        }, 2000);
        setTimeout(() => {setShowJudge(false)}, 1500);
        setShowJudge(true)
    }
    
    return (
        <div className='w-full h-[70%] flex flex-col justify-between'>
            {
                state.tis.length !== 0 &&
                (<>
                    <div className=' justify-center'>
                        <div className='text-center text-gray-800 h-8'>{state.tis[state.currentIdx].tiDescription}</div>
                        <div className='flex justify-center'>
                            <button className='h-24 w-24 bg-pink-300 border rounded-lg flex justify-center items-center' onClick={() => sound({ id: state.tis[state.currentIdx].soundId })}><VoiceIcon /></button>
                        </div>
                    </div>
                    <div className='flex space-x-2 justify-center'>
                        <CardsBracket pys={state.tis[state.currentIdx].choices} />
                    </div>
                    <Judge show={showJudge}/>
                    <div className='flex justify-center'>
                        <button onClick={confirmSelection} className='h-12 w-48 bg-sky-400 rounded-lg drop-shadow-md flex justify-center items-center'>下一题</button>
                    </div>
                    {/* <div className='flex justify-center space-x-20'>
                        <button onClick={confirmSelection} className='bg-sky-500 rounded-lg drop-shadow-md w-20 h-16 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 fill-pink-500' viewBox="0 0 24 24"><g data-name="5.Cancel"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" /><path d="m7.292 8.707 1.415-1.414 8 8-1.414 1.414z" /><path d="m7.292 15.293 8-8 1.415 1.414-8 8z" /></g></svg>
                        </button>
                        <button onClick={cancelSelection} className='bg-sky-500 rounded-lg drop-shadow-md w-20 h-16 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 fill-pink-500' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" /></svg>
                        </button>

                    </div> */}
                </>)
            }

        </div>
    )
}

export const OkayBtn = () => {

    return (
        <button className='bg-sky-500 rounded-lg drop-shadow-md w-20 h-20 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-16 w-16 fill-pink-500' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" /></svg>
        </button>
    )
}

export const VoiceIcon = () =>
    <svg version="1.1" className='fill-sky-500 h-12 w-12' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <g transform='scale(10,10)'>
            <path d="M66.667 10c-12.885 0-23.334 10.449-23.334 23.333v3.258l-6.406 15.467h-.006A3.338 3.338 0 0 0 40 56.667h3.333v6.666c0 5.521 4.477 10 10 10h8.334V90H90V33.333C90 20.449 79.558 10 66.667 10zm16.666 73.334h-15V66.668h-15A3.34 3.34 0 0 1 50 63.334V50h-5.003L50 37.919v-4.586c0-9.189 7.478-16.667 16.667-16.667 9.192 0 16.666 7.478 16.666 16.667v50.001zM31.81 54.324l-6.158-2.553c-3.093 7.455-3.093 15.671-.014 23.132l6.166-2.546c-2.409-5.82-2.403-12.219.006-18.033zM19.492 49.218l-6.159-2.552c-4.27 10.295-4.609 22.222-.013 33.335l6.159-2.552c-3.763-9.101-3.763-19.128.013-28.231z" />
        </g>
    </svg>

export const CancelBtn = () => {
    return (
        <button className='bg-sky-500 rounded-lg drop-shadow-md w-20 h-20 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-16 w16 fill-pink-500' viewBox="0 0 24 24"><g data-name="5.Cancel"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" /><path d="m7.292 8.707 1.415-1.414 8 8-1.414 1.414z" /><path d="m7.292 15.293 8-8 1.415 1.414-8 8z" /></g></svg>
        </button>
    )
}