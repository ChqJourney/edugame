import { PinyinState } from "./PinyinContext";


export type PinyinAction =
  | { type: "fn_setStatus"; status: string }

export const PinyinReducer = (
  state: PinyinState,
  action: PinyinAction
): PinyinState => {
  switch (action.type) {
    case "fn_setStatus":
      return {
        ...state,
        status:action.status,
      }
    
    default:
      return {
        ...state,
      };
  }
};

