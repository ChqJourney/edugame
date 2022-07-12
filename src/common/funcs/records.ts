
export const createSingleRecord=({parameter,creator}:{parameter:any,creator:string})=>{
    return {record:parameter,creator:creator,createdAt:new Date().toLocaleString()}
}

export const combineToLimiteRecords=(oldRecords:any[],newRecord:any,quantity:number)=>{
    if(oldRecords&&oldRecords.length>0){
        return [...oldRecords,newRecord].sort((a,b)=>a.record-b.record).slice(0,quantity-1)
    }
    return [newRecord]
}
export const saveRecords=(game:string,key:string,records:any[])=>{
    const inStore=localStorage.getItem(game)
    let info:any=inStore?JSON.parse(inStore):{}
    info[key]=records
    console.log(info)
    localStorage.setItem(game,JSON.stringify(info))
}