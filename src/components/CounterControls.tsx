import { useDispatch } from 'react-redux'
import {
	decrementCounter,
	incrementCounter,
} from '../redux/features/counter/action-creators'

export const CounterControls = () => {
	const dispatch = useDispatch()

	const increment = incrementCounter()
	const decrement = decrementCounter()

	const onIncrement = () => dispatch(increment)
	const onDecrement = () => dispatch(decrement)

	return (
		<div className='flex items-center space-x-2'>
			<button
				className='px-5 py-2 border dark:border-white/75 dark:text-white/75 rounded-lg cursor-pointer'
				onClick={onIncrement}
			>
				+1
			</button>
			<button
				className='px-5 py-2 border dark:border-white/75 dark:text-white/75 rounded-lg cursor-pointer'
				onClick={onDecrement}
			>
				-1
			</button>
		</div>
	)
}
