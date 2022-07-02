import React, { useEffect, useReducer } from 'react'
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import { initPinyinState, PinyinContext } from '../operations/PinyinContext';
import { PinyinReducer } from '../operations/PinyinReducer';
import { PinyinContainer } from './pinyinContainer';

export const Pinyin=()=>{
    const navigate=useNavigate()
    const [play]=useSound('assets/sounds/py.mp3',{sprite:{
        'a':[480,650],
        'o':[1633,720],
        'e':[2750,690],
        'i':[3470,720],
        'u':[4250,700],
        'v':[5030,1000]
    }})
    const [state, dispatch] = useReducer(PinyinReducer, initPinyinState);
    function blur() {
        navigate('/')
    }
    useEffect(() => {
        window.addEventListener('blur',blur)
        return () => window.removeEventListener('blur',blur)
    },[])
    return (
        <PinyinContext.Provider value={{state,dispatch}}>
        <div className="container mx-auto h-screen w-full lg:w-[500px] bg-gradient-to-b from-cyan-300 to-blue-300 flex flex-col justify-between">
            <PinyinContainer sounder={({id}:{id:string})=>play({id})}/>
            
        </div>
        </PinyinContext.Provider>
    )
}