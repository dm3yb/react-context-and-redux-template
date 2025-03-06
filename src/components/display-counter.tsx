import { useSelector } from 'react-redux'
import { counterSelector } from '../redux/features/counter/selectors'

export const DisplayCounter = () => {
	const counter = useSelector(counterSelector)

	return (
		<div className='flex items-center space-x-2 text-xl uppercase'>
			<span>counter is:</span>
			<span>{counter}</span>
		</div>
	)
}
