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
					<h1 className="mb-12 text-8xl">World Wide Access</h1>
					<p className="mb-12 text-4xl">Discover your journey.</p>
					<div className="m-auto flex h-20 w-96 bg-rose-700 hover:bg-rose-800">
						<Link
							href="/consultation"
							className="h-full w-full content-center text-lg"
						>
							Book a Consultation
						</Link>
					</div>
				</div>
				<div className="flex h-[32rem] w-full flex-col py-20 lg:flex-row lg:py-0">
					<h2 className="left-0 flex flex-1 items-center px-12 text-5xl lg:p-12">
						A new journey awaits
					</h2>
					<p className="flex flex-1 items-center justify-center px-12 text-2xl lg:p-12">
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
				<div className="relative h-[32rem]">
					<Image
						className="h-full w-full object-cover"
						src="/image/background3.jpg"
						alt="Background 3"
						priority={true}
						fill={true}
					/>
					<div className="absolute inset-0 bg-black opacity-15"></div>
				</div>
				<div className="flex h-[32rem] flex-col items-center justify-center bg-[#282d30] text-center text-white">
					<h1 className="text-5xl text-white">Book a Consultation</h1>
					<p className="pb-28 pt-12 text-2xl">
						We’ll walk you through every step of the process.
					</p>
					<div className="flex h-20 w-96 bg-rose-700 hover:bg-rose-800">
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
};
