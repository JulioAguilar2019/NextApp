import React from 'react';
import { Almendra } from 'next/font/google';

const almendra = Almendra({
	weight: ['400', '700'],
	style: ['italic', 'normal'],
	subsets: ['latin'],
	variable: '--font-almendra',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<body className={almendra.className}>{children}</body>
			</head>
		</html>
	);
}
