import { ILocation } from '../models';

export const getLocations = async (): Promise<ILocation[]> => {
	const url = 'https://rickandmortyapi.com/api/location';
	const response = await fetch(url);
	const data = await response.json();
	return data.results;
};
