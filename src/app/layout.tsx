'use client';

import '@/styles/globals.css';

import { Inter, Playfair_Display } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const headerTextColor = pathname === '/' ? 'white' : 'black';

	return (
		<html lang="en">
			<body className={playfair.className}>
				<Header color={headerTextColor} />
				{children}
				<Footer />

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
