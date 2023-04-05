'use client';

import { styled } from 'styled-components';
import './Card.css';
import Image from 'next/image';

interface CardData {
	name: string;
	type?: string;
	created: Date;
	image?: string;
}

interface Props {
	data: CardData;
}

const MyStyle = styled.div`
	background-color: blue;
`;

function Card({ data }: Props) {
	return (
		<MyStyle>
			<p>Name: {data.name}</p>
			<p>Type: {data.type ? data.type : 'No type'}</p>
			<p>Created: {data.created.toString()}</p>
			{data.image && (
				<Image width={100} height={100} alt="Image" src={data.image} />
			)}
		</MyStyle>
	);
}
export default Card;
