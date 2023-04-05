import { Route } from '@/models';
import Link from 'next/link';

interface Props {
	pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
	return (
		<div>
			{pathNames.map((pathName) => (
				<Link
					className="bg-yellow-300 hover:bg-yellow-700"
					key={pathName.path}
					href={pathName.path}
				>
					{pathName.name}{' '}
				</Link>
			))}
		</div>
	);
}

export default Navigator;
