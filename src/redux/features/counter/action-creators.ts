import { IncrementAction, CounterActionType, DecrementAction } from "../../../types/global"


export function incrementCounter(): IncrementAction {
  return { type: CounterActionType.INCREMENT }
}

export function decrementCounter(): DecrementAction {
  return { type: CounterActionType.DECREMENT }
}