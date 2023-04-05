import { Navigator } from '@/components';
import Card from '@/components/Card/Card';
import { Routes } from '@/models';
import { getLocations } from './services';

async function fetchLocations() {
	return getLocations();
}

async function Locations() {
	const characters = await fetchLocations();
	return (
		<>
			<Navigator
				pathNames={[Routes.HOME, Routes.CHARACTERS]}
				key={Date.now()}
			/>
			{characters.map((locations) => (
				<Card key={locations.id} data={locations} />
			))}
		</>
	);
}

export default Locations;
