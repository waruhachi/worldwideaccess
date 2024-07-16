import type { Metadata } from 'next';

import Booking from '@/components/Booking';

export default function Consultation() {
	return (
		<>
			<section id="consultation-hero">
				<div className="flex min-h-[32rem] w-full flex-col items-center justify-center bg-[#edc677] text-center">
					<h1 className="xs:text-4xl lg:text-8xl">
						Book a Consultation
					</h1>
				</div>
			</section>
			<Booking />
		</>
	);
}

export const metadata: Metadata = {
	title: 'Book a Consultation | World Wide Access',
	description: 'Discover your journey',
	icons: {
		icon: 'https://worldwideaccess.org/image/logo.png',
		apple: 'https://worldwideaccess.org/image/logo.png',
	},
};
