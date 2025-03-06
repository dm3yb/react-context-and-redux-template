import { CounterActionEnum } from "../../types/global"

export function incrementCounter() {
	return { type: CounterActionEnum.INCREMENT };
}

export function decrementCounter() {
	return { type: CounterActionEnum.DECREMENT };
}