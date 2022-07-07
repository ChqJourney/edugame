export interface SoundElement{
    id:string
    startTime:number
    duration:number
}
export interface PyTi{
    id:number
    tiDescription:string
    tiImgPath:string
    soundId:string
    choices:Choice[]
    answerIndex:number
    userAnswerIndex?:number,
    isFinished:boolean
}
export interface Choice{
    answerDescription:string
    soundId:string
    imgPath:string
}