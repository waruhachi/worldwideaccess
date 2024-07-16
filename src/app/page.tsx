import type { Metadata } from 'next';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<section id="home-hero">
				<div className="relative h-screen">
					<Image
						className="h-full w-full object-cover"
						src="/image/background1.jpg"
						alt="Background 1"
						fill={true}
					/>
					<div className="absolute inset-0 bg-black opacity-15"></div>
				</div>
				<div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/4 text-center text-white">
					<h1 className="xs:text-4xl xs:mb-8 md:mb-12 md:text-6xl lg:text-8xl">
						World Wide Access
					</h1>
					<p className="xs:text-2xl mb-12 md:text-3xl lg:text-4xl">
						Discover your journey.
					</p>
					<div className="xs:w-48 xs:h-10 m-auto flex w-auto bg-rose-700 hover:bg-rose-800 md:h-20 lg:w-96">
						<Link
							href="/consultation"
							className="xs:text-sm h-full w-full content-center md:text-base lg:text-lg"
						>
							Book a Consultation
						</Link>
					</div>
				</div>
				<div className="flex min-h-[32rem] w-full flex-col py-20 lg:flex-row lg:py-0">
					<h2 className="xs:py-8 left-0 flex flex-1 items-center px-12 text-5xl lg:p-12">
						A new journey awaits
					</h2>
					<p className="flex flex-1 items-center justify-center px-12 text-justify text-2xl lg:p-12">
						World Wide Access is a premier educational consultancy
						committed to helping students from around the globe
						secure admission to top colleges in the US and
						internationally. Our team of dedicated experts guides
						each student through the intricate application process,
						offering personalized support and strategies to enhance
						their educational opportunities. At World Wide Access,
						we believe in transforming dreams into reality by
						providing unparalleled guidance and access to
						world-class educational institutions.
					</p>
				</div>
			</section>
			<section id="home-consultation">
				<div className="relative min-h-[32rem]">
					<Image
						className="h-full w-full object-cover"
						src="/image/background3.jpg"
						alt="Background 3"
						priority={true}
						fill={true}
					/>
					<div className="absolute inset-0 bg-black opacity-15"></div>
				</div>
				<div className="flex min-h-[32rem] flex-col items-center justify-center bg-[#282d30] p-12 text-center text-white">
					<h1 className="text-5xl text-white">Book a Consultation</h1>
					<p className="pb-16 pt-12 text-2xl">
						We&apos;ll walk you through every step of the process.
					</p>
					<div className="xs:w-48 xs:h-10 flex w-auto bg-rose-700 hover:bg-rose-800 md:h-20 lg:w-96">
						<Link
							href="/consultation"
							className="m-auto h-full w-full content-center text-lg"
						>
							Book a Consultation
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export const metadata: Metadata = {
	title: 'World Wide Access',
	description: 'Discover your journey',
	icons: {
		icon: 'https://worldwideaccess.org/image/logo.png',
		apple: 'https://worldwideaccess.org/image/logo.png',
	},
};
