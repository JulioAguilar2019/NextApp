import { Navigator } from '@/components';
import Card from '@/components/Card/Card';
import { Routes } from '@/models';
import { getCharacters } from './services';

async function fetchCharacters() {
	return getCharacters();
}

async function Characters() {
	const characters = await fetchCharacters();
	return (
		<>
			<Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} key={Date.now()} />

			{characters.map((character) => (
				<Card key={character.id} data={character} />
			))}
		</>
	);
}

export default Characters;
