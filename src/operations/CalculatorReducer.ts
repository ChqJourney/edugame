import { CalculatorState } from "./CalculatorContext";

export type CalculatorAction =
  | { type: "set_game_status"; status: string; tis?: Pigai[] }
  | { type: "num_click"; lastKey: any }
  | { type: "fn_createQs"; tis: Pigai[] }
  | { type: "fn_delete" }
  | { type: "fn_mode" }
  | { type: "fn_quantity" }
  | { type: "fn_clear" }
  | { type: "fn_confirm"; tis: Pigai[] }
  | { type: "fn_setCurrent"; current: number }
  | { type: "fn_success" }
  | { type: "fn_msg"; modal?: any; showMsg: boolean }
  | { type: "fn_setDuration"; duration: number }
  | { type: "fn_reset" }
  | { type: "fn_flashStar" }
  | { type: "fn_setRecords"; infos: any[] };

export const CalculatorReducer = (
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState => {
  const level = ["简单", "普通", "困难"];
  const roundTimeArr = [60, 90, 120];
  switch (action.type) {
    case "fn_setRecords":
      return {
        ...state,
        infos:action.infos
      }
    case "fn_flashStar":
      return { ...state, status: "closeEnd" };
    case "fn_reset":
      return {
        ...state,
        status: "idle",
        current: 1,
        tis: [],
        input: " ",
      };
    case "fn_msg":
      return {
        ...state,
        showMsg: action.showMsg,
        modal: action.modal,
      };
    case "set_game_status":
      return {
        ...state,
        status: action.status,
      };
    case "fn_mode":
      if (state.status === "idle") {
        const idx = level.findIndex((v) => v === state.calType);
        const newIdx = idx === level.length - 1 ? 0 : idx + 1;
        const newCalType = idx === level.length - 1 ? level[0] : level[idx + 1];
        const newRoundTime = (roundTimeArr[newIdx] * state.total) / 10;
        return {
          ...state,
          calType: newCalType,
          roundTime: newRoundTime,
          infos:JSON.parse(localStorage.getItem("records-calculator")??"")[`${newCalType}${state.total}`]
        };

      } else {
        return {
          ...state,
        };
      }
    case "fn_quantity":
      if (state.status === "idle") {
        const idxMode = level.findIndex((v) => v === state.calType);
        const newQuantity = state.total === 50 ? 10 : state.total + 10;
        return {
          ...state,
          total: newQuantity,
          roundTime: (roundTimeArr[idxMode] * newQuantity) / 10,
          infos:JSON.parse(localStorage.getItem("records-calculator")??"")[`${state.calType}${newQuantity}`]
        };
      } else {
        return { ...state };
      }
    case "fn_setCurrent":
      return {
        ...state,
        current: action.current,
      };
    case "num_click":
      switch (state.status) {
        case "running":
          return {
            ...state,
            input: `${state.input}${action.lastKey}`.trim(),
          };

        default:
          return {
            ...state,
          };
      }
    case "fn_setDuration":
      return {
        ...state,
        duration: action.duration,
      };

    case "fn_createQs":
      return {
        ...state,
        tis: action.tis,
      };
    case "fn_confirm":
      return {
        ...state,
        current: state.current > state.total - 1 ? 1 : state.current + 1,
        tis: action.tis,
        input: "",
      };
    case "fn_delete":
      return {
        ...state,
        input: state.input.substr(0, state.input.length - 1),
      };
    case "fn_clear":
      return {
        ...state,
        input: "",
      };
    default:
      return {
        ...state,
      };
  }
};
export interface Pigai {
  idx?: number;
  num1: number;
  num2: number;
  operator: string;
  answer: number;
  verdict?: boolean;
}
