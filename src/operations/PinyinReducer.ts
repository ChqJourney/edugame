import { PyTi } from "../pinyin/pyInterface";
import { PinyinState } from "./PinyinContext";

export type PinyinAction =
  | { type: "fn_setStatus"; status: string }
  | { type: "fn_initTis"; tis: PyTi[] }
  | { type: "fn_setCurrentTi"; currentTiIdx: number }
  | { type: "fn_recordUserAnswer"; userAnswerIdx: number }
  | { type: "fn_switchModal"; modal: {showMsg:boolean,msg?:string} }
  | { type: "fn_setMode"; mode: string };

export const PinyinReducer = (
  state: PinyinState,
  action: PinyinAction
): PinyinState => {
  switch (action.type) {
    case "fn_switchModal":
      return { ...state, modal: {showMsg:action.modal.showMsg,msg:action.modal.msg} };
      case "fn_initTis":
      return { ...state, tis: action.tis };
    case "fn_setMode":
      return { ...state, mode: action.mode };
    case "fn_setStatus":
      return {
        ...state,
        status: action.status,
      };
    case "fn_setCurrentTi":
      return {
        ...state,
        currentIdx: action.currentTiIdx,
      };
    case "fn_recordUserAnswer":
      return {
        ...state,
        tis: state.tis.map((ti, idx) => {
          if (idx === state.currentIdx) {
            return {
              ...ti,
              userAnswerIndex: action.userAnswerIdx,
            };
          }
          return ti;
        }),
      };
    default:
      return {
        ...state,
      };
  }
};
