import React, { useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import { initPinyinState, PinyinContext } from '../operations/PinyinContext';
import { PinyinReducer } from '../operations/PinyinReducer';
import { PinyinContainer } from './pinyinContainer';

export const Pinyin=()=>{
    const navigate=useNavigate()
    const [play]=useSound('assets/sounds/effects.mp3',{sprite:{
        'success':[316,2100],
        'wrong':[2824,1700],
        'correct':[6334,1200],
        'timeout':[7686,2100],
        'start':[10106,2050]
    }})
    const [state, dispatch] = useReducer(PinyinReducer, initPinyinState);
    function blur() {
        navigate('/')
    }
    useEffect(() => {
        if(process.env.NODE_ENV!=='development'){
            window.addEventListener('blur',blur)
        }
        return () => window.removeEventListener('blur',blur)
        // eslint-disable-next-line
    },[])
    return (
        <PinyinContext.Provider value={{state,dispatch}}>
        <div className="container mx-auto h-screen w-full lg:w-[500px] bg-gradient-to-b from-cyan-300 to-blue-300 flex flex-col justify-between">
            <PinyinContainer sounder={({id}:{id:string})=>play({id})}/>
        </div>
        </PinyinContext.Provider>
    )
}