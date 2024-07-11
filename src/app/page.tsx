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
			{/* <section id="home-testimonial">
				<div className="relative h-[32rem]">
					<Image
						className="h-full w-full object-cover"
						src="/image/background2.jpg"
						alt="Background 2"
						fill={true}
					/>
					<div className="absolute inset-0 bg-black opacity-15"></div>
				</div>
				<div className="flex w-full flex-col p-12 lg:flex-row">
					<h2 className="flex flex-1 items-center text-5xl">
						Testimonials
					</h2>
					<div className="flex flex-1 flex-col">
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<p className="mb-5 italic">
								“When we bought our 1890s home, the original
								front door was beyond repair. Sackett was able
								to make an exact copy, down to the hand chiseled
								details. It’s a work of art.”
							</p>
							<strong>— Mollie G.</strong>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<p className="mb-5 italic">
								“Sackett designed and built a custom dining set
								for our vacation home. Without fail, it’s the
								thing everyone comments on. I couldn’t be
								happier with the work and the experience of
								designing it with them.”
							</p>
							<strong>— Gabriel H.</strong>
						</div>
						<div className="mt-20 lg:mt-0">
							<p className="mb-5 italic">
								“It’s nearly impossible to find people who still
								apply classic woodworking techniques, but
								Sackett is keeping those traditions alive. Their
								work has a beautiful and timeless quality.”
							</p>
							<strong>— Griffin H.</strong>
						</div>
					</div>
				</div>
			</section> */}
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
