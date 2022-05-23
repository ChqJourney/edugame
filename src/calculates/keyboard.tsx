import React, { useContext } from "react";
import { CalculatorContext } from "../operations/CalculatorContext";

export const Keyboard=()=>{

    return (
        <div className="grid grid-cols-3 gap-4 pt-6 px-2 justify-items-center pb-[33%]">
            <NarroFuncSlot content={"1+1"} fn="dig1mode"/>
            <NarroFuncSlot content={"11+11"} fn="dig2mode"/>
            <NarroFuncSlot content={"x÷"} fn="mdmode"/>

            <FuncSlot content={<Power/>} fn="power"/>
            <FuncSlot content={<Return/>} fn="return"/>
            <FuncSlot content={"OK"} fn="confirm"/>

            <KeySlot content={1}/>
            <KeySlot content={2}/>
            <KeySlot content={3}/>

            <KeySlot content={4}/>
            <KeySlot content={5}/>
            <KeySlot content={6}/>
            
            <KeySlot content={7}/>
            <KeySlot content={8}/>
            <KeySlot content={9}/>
            <FuncSlot content={<ArrowLeft/>} fn="previous"/>
            <KeySlot content={0}/>
            <FuncSlot content={<ArrowRight/>} fn="next"/>
           

        </div>
    )
}
const NarroFuncSlot=({content,fn}:{content:any,fn:string})=>{
    const {state,dispatch}=useContext(CalculatorContext)
    const handleClick=()=>{
        const statusNow=state.status
        const key=content
        if(statusNow==='input'){
            dispatch({type:'fn_createQs',total:10,calType:'dig1mode'})
        }
    }
    
    return (
        <button onClick={handleClick} className="border-2 border-teal-600 shadow-md w-full sm:w-36 h-8 rounded-md flex justify-center items-center">
            {content}
        </button>
    )
}
const FuncSlot=({content,fn}:{content:any,fn:string})=>{
    const {state,dispatch}=useContext(CalculatorContext)
    const handleClick=()=>{
        const statusNow=state.status
        const key=content
        if(statusNow==='input'){
            dispatch({type:'button_click',lastKey:content})
        }
    }
    
    return (
        <button onClick={handleClick} className="border-2 border-teal-600 shadow-md w-full sm:w-36 h-12 rounded-md flex justify-center items-center">
            {content}
        </button>
    )
}
const KeySlot=({content}:{content:any})=>{
    const {state,dispatch}=useContext(CalculatorContext)
    const handleClick=()=>{
        if(state.status==='input'){
            dispatch({type:'button_click',lastKey:content})
        }
    }
    return (
        <button onClick={handleClick} className="border-2 border-teal-500 shadow-md w-full sm:w-36 h-12 rounded-md flex justify-center items-center">
            {content}
        </button>
    )
}


const ArrowRight=()=>{

    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27347" width="200" height="200"><path d="M731.733333 480l-384-341.333333c-17.066667-14.933333-44.8-14.933333-59.733333 4.266666-14.933333 17.066667-14.933333 44.8 4.266667 59.733334L640 512 292.266667 821.333333c-17.066667 14.933333-19.2 42.666667-4.266667 59.733334 8.533333 8.533333 19.2 14.933333 32 14.933333 10.666667 0 19.2-4.266667 27.733333-10.666667l384-341.333333c8.533333-8.533333 14.933333-19.2 14.933334-32s-4.266667-23.466667-14.933334-32z" p-id="27348"></path></svg>
    )
}

const ArrowLeft=()=>{

    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27502" width="200" height="200"><path d="M384 512L731.733333 202.666667c17.066667-14.933333 19.2-42.666667 4.266667-59.733334-14.933333-17.066667-42.666667-19.2-59.733333-4.266666l-384 341.333333c-10.666667 8.533333-14.933333 19.2-14.933334 32s4.266667 23.466667 14.933334 32l384 341.333333c8.533333 6.4 19.2 10.666667 27.733333 10.666667 12.8 0 23.466667-4.266667 32-14.933333 14.933333-17.066667 14.933333-44.8-4.266667-59.733334L384 512z" p-id="27503"></path></svg>
    )
}

const Return=()=>{

    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28310" width="200" height="200"><path d="M624 288H236.8l105.6-105.6c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0l-160 160c-3.2 3.2-6.4 6.4-6.4 9.6-3.2 9.6-3.2 16 0 25.6 3.2 3.2 3.2 6.4 6.4 9.6l160 160c6.4 6.4 12.8 9.6 22.4 9.6s16-3.2 22.4-9.6c12.8-12.8 12.8-32 0-44.8L236.8 352h387.2c115.2 0 208 92.8 208 208S739.2 768 624 768H252.8c-19.2 0-32 12.8-32 32s12.8 32 32 32h371.2c150.4 0 272-121.6 272-272S774.4 288 624 288z" p-id="28311"></path></svg>
    )
}
const Power=()=>{

    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29135" width="200" height="200"><path d="M514.944 981.312a404.992 404.992 0 0 1-141.504-24.896 409.408 409.408 0 0 1-227.008-211.392 402.368 402.368 0 0 1 189.696-531.712 46.592 46.592 0 1 1 40.384 83.904c-152.32 74.624-216.064 253.44-144.576 408.96a302.016 302.016 0 0 0 174.144 161.664 301.248 301.248 0 0 0 237.888-9.344 302.08 302.08 0 0 0 161.664-174.08 301.248 301.248 0 0 0-9.28-237.952 309.76 309.76 0 0 0-146.176-149.248 46.592 46.592 0 1 1 40.448-83.904 403.968 403.968 0 0 1 189.632 194.304 396.032 396.032 0 0 1 10.88 309.376c-38.848 101.12-111.936 181.952-211.392 227.008a376.064 376.064 0 0 1-164.8 37.312z" fill="#172B4D" p-id="29136"></path><path d="M514.944 561.536a45.824 45.824 0 0 1-46.72-46.656V93.568c0-26.432 20.288-46.656 46.72-46.656s46.592 20.224 46.592 46.72v421.248c0 24.96-21.76 46.72-46.592 46.72z" fill="#172B4D" p-id="29137"></path></svg>
    )
}

const createRandomTis=({quantity,mode}:{quantity:number,mode:string}):string[]=>{
    let result:string[]=[]
    for (let index = 0; index < quantity; index++) {
        result.push(createRandomTi({mode}))
    }
    return result
}
const createRandomTi=({mode}:{mode:string}):string=>{
    const operatorList=["+","-"]
    let operatorIdx=Math.floor((Math.random()*(1-0+1))+0)
    let num1:number=0
    let num2:number=0
    if(operatorIdx===1){

        num1=Math.floor(Math.random()*(10-0+1)+0)
        num2=Math.floor(Math.random()*(num1-0+1)+0)
    }else if(operatorIdx===0){
        num1=Math.floor(Math.random()*(10-0+1)+0)
        num2=Math.floor(Math.random()*(10-num1-0+1)+0)
    }else{

    }
    return `${num1}${operatorList[operatorIdx]}${num2}=`
}