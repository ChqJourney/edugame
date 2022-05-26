import { CalculatorState } from "./CalculatorContext";

export type CalculatorAction =
  | { type: "set_game_status" }
  | { type: "num_click"; lastKey: any }
  | { type: "fn_createQs"; tis: Pigai[] }
  | { type: "fn_delete" }
  |{type:"fn_mode"}
  |{type:"fn_quantity"}
  |{type:"fn_clear"}
  | { type: "fn_confirm"; tis: Pigai[] };

export const CalculatorReducer = (
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState => {
  switch (action.type) {

    case "set_game_status":
      return {
        ...state,
        status: state.status==="idle"?"running":"idle"
      };
      case "fn_mode":
        const level=["简单","普通","困难"]
        const idx=level.findIndex(v=>v===state.calType)
        return {
          ...state,
          calType:idx===level.length-1?level[0]:level[idx+1]
        }
      case "fn_quantity":
        return {
          ...state,
          total:state.total===50?10:state.total+10
        }
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
              input:""
          }
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
  verdict: boolean;
}
