export enum CounterActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export type IncrementAction = {
  type: CounterActionType.INCREMENT
}

export type DecrementAction = {
  type: CounterActionType.DECREMENT
}

export type CounterAction = IncrementAction | DecrementAction