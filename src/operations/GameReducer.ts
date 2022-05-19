export interface State {
  status: string;
  btnText: string;
  roundTime: number;
  dimension: number;
  leftTime: number;
  arr: any[];
  recordLevel:string,
  records: any[];
}
export type Action =
  | { type: "set_game_status"; status: string; btnText: string }
  | {
      type: "set_game_parameter";
      roundTime: number;
      dimension: number;
      arr: any[];
    }
  | { type: "block_click"; arr: any[] }
  | { type: "finished"; leftTime: number }
  | { type: "set_game_records"; records: any[],recordLevel:string };

export const GameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "set_game_status":
      return {
        ...state,
        status: action.status,
        btnText: action.btnText,
      };
    case "set_game_parameter":
      return {
        ...state,
        roundTime: action.roundTime,
        dimension: action.dimension,
        arr: action.arr,
      };
    case "block_click":
      return {
        ...state,
        arr: action.arr,
      };
    case "finished":
      return {
        ...state,
        leftTime: action.leftTime,
      };
    case "set_game_records":
      return {
        ...state,
        records: action.records,
      };
    default:
      return state;
  }
};