import { PyTi } from "./pyInterface"

// randomly select ti from tis
export const createPyTis=({quantity,source}:{quantity:number,source:PyTi[]}):PyTi[]=>{
    source.sort(()=>0.5-Math.random())
    return source.slice(0,quantity)
}
// parse json file to tis
export const ParseTisFromJason=({dir}:{dir:string}):PyTi[]=>{
    let tis:PyTi[]=[]
    return tis
}