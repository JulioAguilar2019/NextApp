import { Route } from '@/models';
import Link from 'next/link';

interface Props {
	pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
	return (
		<div style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
			{pathNames.map((pathName) => (
				<Link key={pathName.name} href={pathName.path}>
					{pathName.name}{' '}
				</Link>
			))}
		</div>
	);
}

export default Navigator;
