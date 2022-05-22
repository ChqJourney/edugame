import React, { useEffect, useRef } from "react";

export const SoundPlayer = ({play,sound}:{play:boolean,sound:string}) => {
    const mp3 = useRef<any>(null)
    useEffect(()=>{
            mp3.current.play()
    },[play,sound])
    return (
        <audio preload="true" src={sound} ref={mp3}></audio>
    )
}