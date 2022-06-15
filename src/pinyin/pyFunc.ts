import { pySMArray, pyYMArray, wholePyArray } from "./pinyinArr"
import { PyTi } from "./pyInterface"

// randomly select ti from tis
export const createPyTis=({quantity,source}:{quantity:number,source:PyTi[]}):PyTi[]=>{
    source.sort(()=>0.5-Math.random())
    return source.slice(0,quantity)
}

// transfer pystring in json to py

export const tansformPyString=({str}:{str:string}):string=>{
    let total=getValueInsideSymbol(str,'[',']')
    return str.replace(total,fitPyLetter(total))
}
function getValueInsideSymbol(str:string,leftSymbol:string,rightSymbol:string){

    var start=str.indexOf(leftSymbol)
    var end=str.indexOf(rightSymbol)
    return str.substring(start,end+1)
}
function fitPyLetter(letters:string):string{
    return letters.replace('v',pyYMArray[5])
}