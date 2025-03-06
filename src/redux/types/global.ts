export type RootStateType = {
	counter: number
	theme: string
}

export enum CounterActionEnum {
	INCREMENT = 'increment',
	DECREMENT = 'decrement'
}