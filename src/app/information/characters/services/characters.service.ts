import { ICharacter } from '../models/character.model';

export const getCharacters = async (): Promise<ICharacter[]> => {
	const url = 'https://rickandmortyapi.com/api/character';
	const response = await fetch(url);
	const data = await response.json();
	return data.results;
};
