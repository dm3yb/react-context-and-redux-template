import { CounterActionEnum } from "../../types/global"

const initialState = 1;

type CounterAction ={
	type: CounterActionEnum;
}

export function counterReducer(state: number = initialState, action: CounterAction) { 
	switch (action.type) {
		case CounterActionEnum.INCREMENT:
			return state + 1;
		
		case CounterActionEnum.DECREMENT:
			return state - 1;
			
		default:
			return state;
	}
}