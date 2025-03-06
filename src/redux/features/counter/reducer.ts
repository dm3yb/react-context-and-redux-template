import { CounterAction, CounterActionType } from "../../../types/global"

// Set a initial counter state
const initialState = 1

export function counterReducer(state = initialState, action: CounterAction): number {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return state + 1
    
    case CounterActionType.DECREMENT:
      return state - 1
        
    default:
      return state // Always return the current state for unknown actions
  }
}