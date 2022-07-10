export interface FocusState {
  userName: string;
  status: string;
  btnText?: string;
  roundTime: number;
  dimension: number;
  leftTime?: number;
  arr?: any[];
  recordLevel: string;
  records: any[];
  modal?: any;
  modalVisible: boolean;
  actionSheet?: any;
  actionSheetVisible: boolean;
}
export enum Status {
  idle,
  finished,
  timeout,
}
export type Action =
  | {
      type: "set_game_status";
      status: string;
      btnText?: string;
      arr?: any[];
      leftTime?: number;
    }
  | {
      type: "set_game_parameter";
      roundTime: number;
      dimension: number;
      arr: any[];
    }
  | { type: "set_game_records"; records: any[]; recordLevel: string }
  | { type: "showModal"; visible: boolean; modal?: any }
  | { type: "showActionSheet"; visible: boolean; actionSheet?: any }
  | { type: "set_stop"; status: string; btnText: string };

export const FocusReducer = (state: FocusState, action: Action): FocusState => {
  switch (action.type) {
    case "set_stop":
      return { ...state, status: action.status, btnText: action.btnText };
    case "showModal":
      return { ...state, modalVisible: action.visible, modal: action.modal };
    case "showActionSheet":
      return {
        ...state,
        actionSheetVisible: action.visible,
        actionSheet: action.actionSheet,
      };
    case "set_game_status":
      return {
        ...state,
        status: action.status,
        btnText: action.btnText,
        arr: action.arr ?? [],
        leftTime: action.leftTime,
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
