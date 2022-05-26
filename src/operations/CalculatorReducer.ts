import { CalculatorState } from "./CalculatorContext";

export type CalculatorAction =
  | { type: "set_game_status"; status: string }
  | { type:'num_click';lastKey:any}
  |{type:'fn_createQs';calType:string;total:number,tis:Pigai[]}
  |{type:'fn_return'}
  |{type:'fn_confirm',tis:Pigai[]}

  export const CalculatorReducer = (state: CalculatorState, action: CalculatorAction): CalculatorState => {
      switch(action.type){
          case 'set_game_status':
              return {
                  ...state,
                  status:action.status
              }
              case 'num_click':
                  switch(state.status){
                      case 'input':
                          return {
                              ...state,
                              input:`${state.input}${action.lastKey}`.trim()
                          }
                          
                          default:
                              return {
                                  ...state
                              }
                  }
                  case 'fn_createQs':
                      return {
                          ...state,
                        calType:action.calType,
                        total:action.total,
                        tis:action.tis
                      }
                      case 'fn_confirm':
                          return {
                              ...state,
                              current:state.current>state.total-1?1:state.current+1,
                              tis:action.tis,
                              input:""
                          }
              default:
                  return {
                      ...state
                  }
      }
  }
  export interface Pigai{
      idx?:number
      num1:number
      num2:number
      operator:string
      answer:number
      verdict:boolean
  }