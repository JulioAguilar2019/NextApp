export interface ILocation {
	name: string;
	url: string;
}

export interface ICharacter {
	created: Date;
	episode: string[];
	gender: string;
	id: number;
	image: string;
	location: ILocation;
	name: string;
	origin: ILocation;
	species: string;
	status: string;
	type: string;
	url: string;
}
