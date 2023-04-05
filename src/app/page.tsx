import { Navigator } from '@/components';
import Image from 'next/image';
import { Routes } from '../models/routes.model';
import Omen from '../../public/images/omen.png';

function App() {
	return (
		<>
			<h1>Welcome to Rick and Morty app</h1>
			<h2>what do yo want to see?</h2>
			<Navigator
				pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]}
				key={Date.now()}
			/>
			<Image alt="Image" src={Omen} placeholder="blur" />
		</>
	);
}

export default App;
