import React from 'react';
import { Almendra } from 'next/font/google';

const almendra = Almendra({
	weight: ['400', '700'],
	style: ['italic', 'normal'],
	subsets: ['latin'],
	variable: '--font-almendra',
	display: 'optional',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={almendra.className}>{children}</body>
		</html>
	);
}
