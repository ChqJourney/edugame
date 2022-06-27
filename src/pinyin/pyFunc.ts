import { pySMArray, pyYMArray, wholePyArray } from "./pinyinArr"
import { PyTi } from "./pyInterface"

// randomly select ti from tis
export const createPyTis=({quantity,source}:{quantity:number,source:PyTi[]}):PyTi[]=>{
    source.sort(()=>0.5-Math.random())
    return source.slice(0,quantity)
}

// transfer pystring in json to py

export const transformPyString=(str:string):string=>{
    let total=getValueInsideSymbol(str,'[',']')
    return str.replace(total,fitPyLetter(total))
}
function getValueInsideSymbol(str:string,leftSymbol:string,rightSymbol:string){

    var start=str.indexOf(leftSymbol)
    var end=str.indexOf(rightSymbol)
    return str.substring(start,end+1)
}
function fitPyLetter(letters:string):string{
    let result=letters.substring(1,letters.length-1)
    return result.replace('v',pyYMArray[5])
}
// count working day from start date to end date
function countWorkingDay(from:Date,to:Date){
    let count=0
    let fromDate=new Date(from)
    let toDate=new Date(to)
    while(fromDate<toDate){
        if(fromDate.getDay()!==0&&fromDate.getDay()!==6){
            count++
        }
        fromDate.setDate(fromDate.getDate()+1)
    }
    return count 
}
// replace string inside symbol [] to letter "a"
function replaceStringInsideSymbol(str:string,leftSymbol:string,rightSymbol:string,letter:string){
    var start=str.indexOf(leftSymbol)
    var end=str.indexOf(rightSymbol)
    return str.substring(0,start)+letter+str.substring(end+1)
}
