import { CalculatorState } from "./CalculatorContext";

export type CalculatorAction =
  | { type: "set_game_status"; status: string }
  | { type:'button_click';lastKey:any}

  export const CalculatorReducer = (state: CalculatorState, action: CalculatorAction): CalculatorState => {
      switch(action.type){
          case 'set_game_status':
              return {
                  ...state,
                  status:action.status
              }
              case 'button_click':
                  switch(state.status){
                      case 'input':
                          return {
                              ...state,
                              input:`${state.input}${action.lastKey}`
                          }
                          
                          default:
                              return {
                                  ...state
                              }
                  }
              default:
                  return {
                      ...state
                  }
      }
  }