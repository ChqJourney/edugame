import React from 'react'

export const Prompt=({content,positiveText,negativeText,positiveCallback,negativeCallback}
    :{content:string,positiveText?:string,negativeText?:string,positiveCallback?:()=>void,negativeCallback?:()=>void})=>{

    return (
        <div className='w-48 h-24 grid grid-rows-2 divide-y divide-slate-400 rounded-lg ring-0 outline-none bg-white'>
                  <div className='flex items-center justify-center'>{content}</div>
                  <div className='grid grid-cols-2 bottom-0  divide-x divide-slate-400 absolute w-48'>
                  <button className='w-24 h-12 ' onClick={negativeCallback}>{negativeText??"Cancel"}</button>
                  <button className='w-24 h-12' onClick={positiveCallback}>{positiveText??"Confirm"}</button>
                  </div>
                </div>
    )
}