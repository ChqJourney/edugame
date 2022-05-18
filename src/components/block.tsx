import React, { useContext, useState } from "react";
import { GameContext } from "../operations/GameContext";

export const Block = ({  num, status }: { num: number, status: string }) => {
    const {state,dispatch}=useContext(GameContext)
    const [wrong,setWrong]=useState(false)
    let content:any = "#"
    switch (status) {
        case 'idle':
            content = <MagIcon/>;
            break;
        case 'running':
            content = num;
            break;
        case 'out':
            content = "*";
            break;
        default:
            break;
    }
    const handleClick = () => {
        if(status==='running'){
            let modifiedArr=[];
            const answer=findMin(state.arr);
            if(num===answer){
                 modifiedArr=state.arr.map((val)=>{
                    if(val===num){
                        return 0
                    }
                    return val
                })
                dispatch({type:'block_click',arr:modifiedArr})
            }else{
                setWrong(true)
                setTimeout(() => {
                    setWrong(false)
                }, 300);
            }
        }
        if(status==='stop'){
            
        }
    }
    if(content!==0){

        return (
            <button className={`square`} onClick={handleClick}>
                <div className={`h-8 w-8 ${wrong?"shake":""}`}>
                {content}
                </div>
                </button>
        )
    }else{
        return (
            <button className="square" onClick={handleClick}>
                <div className="h-8 w-8">
                <HeartIcon/>
                </div>
                </button>
        )
    }


}


export const HeartIcon=()=>{

    return (
        <svg className="h-6 w-6 fill-pink-600" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6261" width="200" height="200"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" p-id="6262" fill="#d4237a"></path></svg>
    )
}
export const QuestionIcon=()=>{

    return (
        <svg className="h-6 w-6 fill-sky-500" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7117" width="200" height="200"><path d="M559.261538 748.307692h-98.461538c-15.753846 0-27.569231-11.815385-27.569231-27.56923v-29.538462c0-82.707692 53.169231-157.538462 131.938462-185.107692 23.630769-7.876923 45.292308-21.661538 63.015384-41.353846 98.461538-118.153846 7.876923-259.938462-110.276923-263.876924-43.323077-1.969231-84.676923 13.784615-116.184615 43.323077-25.6 23.630769-41.353846 53.169231-45.292308 86.646154-1.969231 11.815385-13.784615 21.661538-29.538461 21.661539h-98.461539c-17.723077 0-31.507692-13.784615-29.538461-31.507693 7.876923-74.830769 41.353846-141.784615 94.523077-194.953846 63.015385-59.076923 143.753846-90.584615 230.4-88.615384C687.261538 43.323077 821.169231 177.230769 827.076923 340.676923c5.907692 137.846154-78.769231 261.907692-206.769231 309.169231-17.723077 7.876923-29.538462 21.661538-29.538461 39.384615v29.538462c0 17.723077-15.753846 29.538462-31.507693 29.538461zM590.769231 955.076923c0 15.753846-13.784615 29.538462-29.538462 29.538462h-98.461538c-15.753846 0-29.538462-13.784615-29.538462-29.538462v-98.461538c0-15.753846 13.784615-29.538462 29.538462-29.538462h98.461538c15.753846 0 29.538462 13.784615 29.538462 29.538462v98.461538z" p-id="7118"></path></svg>
    )
}
export const MagIcon=()=>{
    return (
        <svg className="h-8 w-8 fill-sky-500" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18128" width="200" height="200"><path d="M897.6064 834.1824l-66.016 66.6176-180.8896-181.9456c-53.2608 41.0496-119.5776 65.6896-191.7376 65.6896-174.8352 0-316.5696-143.0336-316.5696-319.4688S284.128 145.6 458.9632 145.6c174.8224 0 316.5568 143.0272 316.5568 319.4688 0 69.5744-22.2784 133.7728-59.7056 186.2208L897.6064 834.1824zM458.9632 223.0592c-132.4608 0-239.84 108.3456-239.84 242.0096s107.3728 242.0224 239.84 242.0224c132.4288 0 239.8016-108.3584 239.8016-242.0224S591.392 223.0592 458.9632 223.0592z" p-id="18129" fill="#1296db"></path></svg>
    )
}
function findMin(numArr:number[]):number{
    let temp=numArr.length
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]!=0){
            if(numArr[i]<temp){
                temp=numArr[i]
            }
        }
    }
    return temp
}