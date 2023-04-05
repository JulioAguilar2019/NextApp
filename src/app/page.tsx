import { Navigator } from '@/components';
import { Routes } from '../models/routes.model';

function App() {
	return (
		<>
			<h1>Welcome to Rick and Morty app</h1>
			<h2>what do yo want to see?</h2>
			<Navigator
				pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]}
				key={Date.now()}
			/>
		</>
	);
}

export default App;
