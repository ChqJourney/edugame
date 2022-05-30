export interface FocusState {
  userName:string;
  status: string;
  btnText?: string;
  roundTime: number;
  dimension: number;
  leftTime?: number;
  arr?: any[];
  recordLevel:string,
  records: any[];
}
export enum Status{
  idle,
  finished,
  timeout
}
export type Action =
  | { type: "set_game_status"; status: string; btnText?: string,arr?:any[],leftTime?:number }
  | {
      type: "set_game_parameter";
      roundTime: number;
      dimension: number;
      arr: any[];
    }
  | { type: "set_game_records"; records: any[],recordLevel:string }

export const FocusReducer = (state: FocusState, action: Action): FocusState => {
  switch (action.type) {
    case "set_game_status":
      return {
        ...state,
        status: action.status,
        btnText: action.btnText,
        arr:action.arr??[],
        leftTime:action.leftTime,
      };
    case "set_game_parameter":
      return {
        ...state,
        roundTime: action.roundTime,
        dimension: action.dimension,
        arr: action.arr,
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
