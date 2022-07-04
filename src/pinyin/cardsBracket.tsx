import React from 'react'
import { Card } from './card'
import { Choice } from './pyInterface'

export const CardsBracket=({pys}:{pys:Choice[]})=>{

    return (
        <div className="flex space-x-6">
            {pys.map((v,i)=><Card py={v.answerDescription} idx={i} key={i}/>)}
        </div>
    )
}