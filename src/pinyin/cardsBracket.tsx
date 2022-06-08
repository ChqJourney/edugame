import React from 'react'
import { Card } from './card'
import { aArray } from './pinyinArr'

export const CardsBracket=({pys}:{pys:string})=>{

    return (
        <div className="flex">
            {Array.from(pys).map((v,i)=><Card py={v} key={i}/>)}
        </div>
    )
}