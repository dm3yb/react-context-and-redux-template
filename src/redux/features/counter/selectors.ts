import { RootStateType } from "../../types/global"

export function counterSelector(state: RootStateType) {
		return state.counter;
}