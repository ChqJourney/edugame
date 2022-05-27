import React, { useContext } from "react";
import { CalculatorContext } from "../operations/CalculatorContext";
import { Pigai } from "../operations/CalculatorReducer";

export const Keyboard = () => {
    const { state } = useContext(CalculatorContext)
    return (
        <div className="grid grid-cols-3 gap-4 pt-6 px-2 justify-items-center pb-[33%]">
            <FuncSlot content={`${state.calType}`} fn="mode" />
            <FuncSlot content={`${state.total} 题`} fn="quantity" />
            <FuncSlot content={state.status === "idle" ? "Start" : "Stop"} fn="power" />

            <KeySlot content={1} />
            <KeySlot content={2} />
            <KeySlot content={3} />

            <KeySlot content={4} />
            <KeySlot content={5} />
            <KeySlot content={6} />

            <KeySlot content={7} />
            <KeySlot content={8} />
            <KeySlot content={9} />
            <FuncSlot content={<Delete />} fn="delete" />
            <KeySlot content={0} />
            <FuncSlot content={"OK"} fn="confirm" />
            <button className=" border w-full border-teal-700 shadow-md h-16 rounded-md col-span-3">Submit</button>

        </div>
    )
}

const FuncSlot = ({ content, fn }: { content: any, fn: string }) => {
    const { state, dispatch } = useContext(CalculatorContext)
    const handleClick = () => {
        switch (fn) {
            case 'power':
                if (state.status === "idle") {

                    var tis = createRandomTis({ quantity: state.total, mode: state.calType })
                    dispatch({ type: 'fn_createQs', tis: tis })
                    dispatch({ type: 'set_game_status' })
                } else {
                    dispatch({ type: 'fn_createQs', tis: [] })
                    dispatch({ type: 'set_game_status' })
                }
                break
            case 'mode':
                dispatch({ type: 'fn_mode' })
                break
            case 'quantity':
                dispatch({ type: 'fn_quantity' })
                break
            case 'confirm':
                if(state.tis[state.current-1]?.verdict!==true){
                    var ans = parseInt(state.input)
                    let modified = state.tis
                    modified = state.tis.map((v, i) => {
                        if (i === state.current - 1) {
                            
                            if (state.tis[state.current - 1].answer === ans) {
                                
                                v.verdict = true
                            } else {
                                v.verdict = false
                            }
                            return v
                        } else {
                            return v
                        }
                    })
                    dispatch({ type: 'fn_confirm', tis: modified })
                }else{
                    dispatch({type:"fn_confirm",tis:state.tis})
                    
                }
                break
            case 'delete':
                dispatch({ type: 'fn_delete' })
                break
            default:
                break
        }

    }

    return (
        <button onClick={handleClick} className="border-2 border-teal-600 shadow-md w-full sm:w-36 h-20 rounded-md flex justify-center items-center">
            {content}
        </button>
    )
}
const KeySlot = ({ content }: { content: any }) => {
    const { state, dispatch } = useContext(CalculatorContext)
    const handleClick = () => {
        console.log('in')
        if (state.status === 'running') {
            console.log(content)
            dispatch({ type: 'num_click', lastKey: content })
        }
    }
    return (
        <button onClick={handleClick} className="border-2 border-teal-500 shadow-md w-full sm:w-36 h-16 rounded-md flex justify-center items-center">
            {content}
        </button>
    )
}


const ArrowRight = () => {

    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27347" width="200" height="200"><path d="M731.733333 480l-384-341.333333c-17.066667-14.933333-44.8-14.933333-59.733333 4.266666-14.933333 17.066667-14.933333 44.8 4.266667 59.733334L640 512 292.266667 821.333333c-17.066667 14.933333-19.2 42.666667-4.266667 59.733334 8.533333 8.533333 19.2 14.933333 32 14.933333 10.666667 0 19.2-4.266667 27.733333-10.666667l384-341.333333c8.533333-8.533333 14.933333-19.2 14.933334-32s-4.266667-23.466667-14.933334-32z" p-id="27348"></path></svg>
    )
}

const ArrowLeft = () => {

    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27502" width="200" height="200"><path d="M384 512L731.733333 202.666667c17.066667-14.933333 19.2-42.666667 4.266667-59.733334-14.933333-17.066667-42.666667-19.2-59.733333-4.266666l-384 341.333333c-10.666667 8.533333-14.933333 19.2-14.933334 32s4.266667 23.466667 14.933334 32l384 341.333333c8.533333 6.4 19.2 10.666667 27.733333 10.666667 12.8 0 23.466667-4.266667 32-14.933333 14.933333-17.066667 14.933333-44.8-4.266667-59.733334L384 512z" p-id="27503"></path></svg>
    )
}

const Return = () => {

    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28310" width="200" height="200"><path d="M624 288H236.8l105.6-105.6c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0l-160 160c-3.2 3.2-6.4 6.4-6.4 9.6-3.2 9.6-3.2 16 0 25.6 3.2 3.2 3.2 6.4 6.4 9.6l160 160c6.4 6.4 12.8 9.6 22.4 9.6s16-3.2 22.4-9.6c12.8-12.8 12.8-32 0-44.8L236.8 352h387.2c115.2 0 208 92.8 208 208S739.2 768 624 768H252.8c-19.2 0-32 12.8-32 32s12.8 32 32 32h371.2c150.4 0 272-121.6 272-272S774.4 288 624 288z" p-id="28311"></path></svg>
    )
}
const Power = () => {

    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29135" width="200" height="200"><path d="M514.944 981.312a404.992 404.992 0 0 1-141.504-24.896 409.408 409.408 0 0 1-227.008-211.392 402.368 402.368 0 0 1 189.696-531.712 46.592 46.592 0 1 1 40.384 83.904c-152.32 74.624-216.064 253.44-144.576 408.96a302.016 302.016 0 0 0 174.144 161.664 301.248 301.248 0 0 0 237.888-9.344 302.08 302.08 0 0 0 161.664-174.08 301.248 301.248 0 0 0-9.28-237.952 309.76 309.76 0 0 0-146.176-149.248 46.592 46.592 0 1 1 40.448-83.904 403.968 403.968 0 0 1 189.632 194.304 396.032 396.032 0 0 1 10.88 309.376c-38.848 101.12-111.936 181.952-211.392 227.008a376.064 376.064 0 0 1-164.8 37.312z" fill="#172B4D" p-id="29136"></path><path d="M514.944 561.536a45.824 45.824 0 0 1-46.72-46.656V93.568c0-26.432 20.288-46.656 46.72-46.656s46.592 20.224 46.592 46.72v421.248c0 24.96-21.76 46.72-46.592 46.72z" fill="#172B4D" p-id="29137"></path></svg>
    )
}
const Delete = () => {
    return (
        <svg className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2882" width="200" height="200"><path d="M874.666667 202.666667H360.533333c-21.333333 0-40.533333 8.533333-55.466666 23.466666l-217.6 234.666667c-25.6 27.733333-25.6 72.533333 0 100.266667l217.6 234.666666c14.933333 14.933333 34.133333 23.466667 55.466666 23.466667H874.666667c40.533333 0 74.666667-34.133333 74.666666-74.666667V277.333333c0-40.533333-34.133333-74.666667-74.666666-74.666666z m10.666666 544c0 6.4-4.266667 10.666667-10.666666 10.666666H360.533333c-2.133333 0-6.4-2.133333-8.533333-4.266666l-217.6-234.666667c-4.266667-4.266667-4.266667-10.666667 0-14.933333l217.6-234.666667c2.133333-2.133333 4.266667-4.266667 8.533333-4.266667H874.666667c6.4 0 10.666667 4.266667 10.666666 10.666667V746.666667z" p-id="2883"></path><path d="M684.8 403.2c-12.8-12.8-32-12.8-44.8 0l-64 64-61.866667-61.866667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l61.866667 61.866667-61.866667 61.866667c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l61.866666-61.866667L640 618.666667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L620.8 512l61.866667-61.866667c12.8-12.8 12.8-34.133333 2.133333-46.933333z" p-id="2884"></path></svg>
    )
}

const createRandomTis = ({ quantity, mode }: { quantity: number, mode: string }): Pigai[] => {
    let result: Pigai[] = []
    for (let index = 0; index < quantity; index++) {
        const ti = createRandomTi({ mode })
        result.push(ti)
    }
    return result
}
const createRandomTi = ({ mode }: { mode: string }): Pigai => {
    const operatorList = ["+", "-"]

    let operatorIdx = Math.floor((Math.random() * (1 - 0 + 1)) + 0)

    let num1: number = 0
    let num2: number = 0
    let num3: number = 0
    let bigNum = 0;
    switch (mode) {
        case "简单":
            bigNum = 10
            break
        case "普通":
            bigNum = 33
            break
        case "困难":
            bigNum = 99
            break
        default:
            bigNum = 10
            break
    }

    if (operatorIdx === 1) {
        num1 = Math.ceil(Math.random() * bigNum)
        num2 = Math.ceil(Math.random() * num1)
        num3 = num1 - num2
    } else if (operatorIdx === 0) {
        num1 = Math.ceil(Math.random() * bigNum)
        num2 = Math.ceil(Math.random() * (bigNum - num1))
        num3 = num1 + num2
    } else {

    }
    return { num1: num1, num2: num2, operator: operatorList[operatorIdx], answer: num3, verdict: undefined }
}