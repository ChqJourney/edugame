import React, { useContext } from "react";
import ReactModal from "react-modal";
import useSound from "use-sound";
import { Prompt } from "../common/prompt";
import { PinyinContext } from "../operations/PinyinContext";
import { Header } from "./header";
import { createPyTis } from "./pyFunc";
import { PyTi } from "./pyInterface";
import { QaContainer } from "./qaContainer";

export const PinyinContainer = ({ sounder }: { sounder: ({ id }: { id: string }) => void }) => {
    const { state, dispatch } = useContext(PinyinContext)
    // TODO: 音效音量调大
    // TODO: 增加停止游戏按钮
    const [play] = useSound('assets/sounds/pysounds.mp3', {
        sprite: {
            'a': [35246, 1000],
            'o': [36617, 1300],
            'e': [38115, 1200],
            'i': [39345, 1400],
            'u': [40786, 1700],
            'v': [42243, 1600],
            'b': [154, 1200],
            'p': [1705, 1300],
            'm': [2980, 1450],
            'f': [4428, 1600],
            'd': [6165, 1600],
            't': [7790, 1400],
            'n': [9360, 1400],
            'l': [10767, 1400],
            'g': [12100, 1400],
            'k': [13541, 1400],
            'h': [15170, 1300],
            'j': [16704, 1300],
            'q': [18140, 1300],
            'x': [19730, 1300],
            'zh': [27711, 1300],
            'ch': [29039, 1400],
            'sh': [30661, 1700],
            'r': [25928, 1800],
            'z': [21102, 1300],
            'c': [22607, 1300],
            's': [24077, 1300],
            'y': [32029, 1300],
            'w': [33474, 1800],
            'ai': [43704, 1200],
            'ei': [45012, 1300],
            'ui': [46433, 1200],
            'ao': [47787, 1200],
            'ou': [48854, 1100],
            'iu': [49868, 1200],
            'ie': [51071, 1100],
            've': [52195, 1200],
            'er': [53304, 1100],
            'an': [54452, 1100],
            'en': [55601, 1300],
            'in': [56949, 1200],
            'un': [58181, 1300],
            'vn': [59405, 1100],
            'ang': [60584, 1400],
            'eng': [62086, 1500],
            'ing': [63815, 1500],
            'ong': [65227, 1200]
        }
    })
    const startAct = () => {
        const str = ["声母", "韵母", "混合"]
        setTimeout(() => {
            fetch(`assets/qs/tis${str.findIndex((v, i) => v === state.modal.msg)}.json`)
                .then(res => res.json()).then((data: PyTi[]) => {
                    dispatch({ type: "fn_initTis", tis: createPyTis({ quantity: 10, source: data }) })
                    dispatch({ type: "fn_setStatus", status: "running" })
            })
        }, 1500)
        dispatch({ type: 'fn_switchModal', modal: { showMsg: false } })
        dispatch({ type: "fn_setMode", mode: state.modal.msg ?? "声母" })
        sounder({ id: 'start' })
    }
    return (
        <>
            <Header sounder={sounder} />
            <QaContainer sound={sounder} pySound={({ id }: { id: string }) => play({ id })} />
            {/* <PinyinNav/> */}
            <ReactModal className=" absolute top-[50%] left-[50%] border-2 -translate-x-1/2 outline-none -translate-y-3/4" shouldCloseOnOverlayClick={false} isOpen={state.modal.showMsg}>
                <Prompt content="开始游戏吗？" positiveCallback={startAct} negativeCallback={()=>dispatch({ type: 'fn_switchModal', modal: { showMsg: false } })}/>
                
            </ReactModal>
        </>

    )
}