import './App.css';
import animalsData from './data/animals.json';
import type { Animal } from './types/Animal';

const animals: Animal[] = animalsData;

function App() {
	return (
		<main className='App'>
			<h1>Animals</h1>
			<ul className='animal-list'>
				{animals.map(animal => (
					<li key={animal.name}>
						<h2>{animal.name}</h2>
						<p>Continent: {animal.continent}</p>
						<p>Average Speed: {animal.averageSpeed} km/h</p>
						<p>Weight: {animal.weight} kg</p>
					</li>
				))}
			</ul>
		</main>
	);
}

export default App;
