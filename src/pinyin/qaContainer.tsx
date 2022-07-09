import React, { useContext, useState } from 'react'
import { PinyinContext } from '../operations/PinyinContext'
import { CardsBracket } from './cardsBracket'
import { Judge } from './judge'
import { Timer } from './timer'
import {PyTi} from './pyInterface'

export const QaContainer = ({ sound, pySound }: { sound: ({ id }: { id: string }) => void, pySound: ({ id }: { id: string }) => void }) => {
    const { state, dispatch } = useContext(PinyinContext)
    const [showJudge, setShowJudge] = useState(false)

    function confirmSelection() {
        setTimeout(() => {
            dispatch({ type: 'fn_setCurrentTi', currentTiIdx: state.currentIdx !== 9 ? state.currentIdx + 1 : state.currentIdx })
        }, 2000);
        setTimeout(() => { setShowJudge(false) }, 1500);
        setShowJudge(true)
        if (state.tis.every(ti => ti.userAnswerIndex === ti.answerIndex)) {
            dispatch({ type: 'fn_setStatus', 'status': 'success' })
        }
    }
    function handleClick(txt: string) {
        dispatch({ type: "fn_switchModal", modal: { showMsg: true, msg: txt } })
    }
    // TODO:点击“下一题”后，音频播放按钮要保持失效，直至新题加载完毕
    // TODO:题库完整 
    return (
        <div className='w-full h-full flex flex-col justify-between py-12 relative'>
            {state.status !== 'idle' ?
                (<>
                <div className='absolute right-6 top-4 text-xl text-lime-600'>{state.currentIdx + 1} / {state.tiQuantity}</div>
                        <Timer time={60} sounder={sound} status={state.status} />
                    <div className=' justify-center'>
                        <div className='text-center text-gray-800 h-8 mt-4'>{state.tis[state.currentIdx].tiDescription}</div>
                        <div className='flex justify-center'>
                            <button className='h-24 w-24 bg-pink-300 border rounded-lg flex justify-center items-center' onClick={() =>{
                                if(!showJudge){ 
                                    pySound({ id: state.tis[state.currentIdx].soundId })
                                }}}><VoiceIcon /></button>
                        </div>
                    </div>
                    <div className='flex space-x-2 justify-center'>
                        
                        <CardsBracket pys={state.tis[state.currentIdx].choices}/>
                    </div>
                    <ErrorZone tis={state.tis}/>
                    <Judge show={showJudge} sounder={sound} />
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
                </>) : (
                    <>
                        <div onClick={() => handleClick('声母')} className='absolute text-white flex flex-col items-center justify-center top-[10%] left-[50%] -translate-x-[50%] w-36 h-36 border rounded-3xl bg-emerald-400'>
                            <div className=''>
                                声母认读
                            </div>
                            <div className='text-lg font-mono '>b p m f</div>
                            <div className='text-lg text-center font-mono '>d t n l</div>
                        </div>
                        <div onClick={() => handleClick('韵母')} className='absolute text-white flex flex-col items-center justify-center top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-36 h-36 border rounded-3xl bg-orange-400'>
                            <div className=''>
                                韵母认读
                            </div>
                            <div className='text-lg font-mono '>a o e</div>
                            <div className='text-lg text-center font-mono '>an en in</div>
                        </div>
                        <div onClick={() => handleClick('混合')} className='absolute flex flex-col text-white items-center justify-center bottom-[10%] left-[50%] -translate-x-[50%] w-36 h-36 border rounded-3xl bg-lime-500'>
                            <div className=''>
                                整体认读
                            </div>
                            <div className='text-lg font-mono '>zhi chi shi</div>
                            <div className='text-lg text-center font-mono '>yi wu yu</div>
                        </div>
                    </>
                )
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
const ErrorZone = ({ tis }: { tis:PyTi[] }) => {

    return (
        <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-4 flex space-x-1 sm:space-x-4">
            {tis.map((v, i) => {
                if (v.userAnswerIndex!==undefined&&v.answerIndex!==v.userAnswerIndex&&v.isFinished) {
                    return <ErrorIndicator idx={i} key={i} />
                } else { return "" }
            })}
        </div>
    )
}
const ErrorIndicator = ({ idx }: { idx: number }) => {
    const { dispatch } = useContext(PinyinContext)
    const errorClick = () => {
        dispatch({ type: 'fn_setCurrentTi', currentTiIdx: idx })
    }
    return (
        <button onClick={errorClick} className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-gray-400 text-lg text-center text-red-600 flex justify-center items-center p-0">{idx + 1}</button>
    )
}