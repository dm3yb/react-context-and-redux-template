import { combineReducers, createStore } from "redux"
import { counterReducer } from "./features/counter/reducer"

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: () => 'light'
})

export const store = createStore(rootReducer)