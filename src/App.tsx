import { twMerge } from 'tailwind-merge'
import './App.css'
import { CounterControls } from './components/CounterControls'
import { DisplayCounter } from './components/DisplayCounter'

export default function App() {
	return (
		<main className={twMerge('min-h-screen py-20 bg-white dark:bg-gray-800')}>
			<div className='flex flex-col items-start container mx-auto px-4 space-y-5'>
				<DisplayCounter />
				<CounterControls />
				{Array.from({ length: 100 }).map((_, i) => (
					<p className='leading-loose text-black dark:text-white/75' key={i}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
						ratione nisi placeat perspiciatis praesentium rerum quaerat
						temporibus quasi repellendus minus nihil, tempore repudiandae beatae
						ducimus reprehenderit dolore sequi sint odio ullam optio quo
						voluptatum nulla consequatur vitae! Saepe nesciunt culpa porro
						numquam? Dolorum error ratione ducimus. Accusamus, dolorum
						repellendus illo voluptatum at, sequi saepe assumenda eius ab,
						adipisci itaque sed. Voluptate reprehenderit quo error quos? Natus,
						laboriosam sint doloremque iusto accusamus repellat labore
						cupiditate maiores! Maxime commodi praesentium, dicta neque
						cupiditate sint maiores. Quibusdam officiis dignissimos obcaecati
						explicabo unde harum voluptates ratione rem, est repudiandae?
						Aspernatur a inventore hic veniam?
					</p>
				))}
			</div>
		</main>
	)
}
