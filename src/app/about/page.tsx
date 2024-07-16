import type { Metadata } from 'next';

import Link from 'next/link';

export default function About() {
	return (
		<>
			<section id="about-hero">
				<div className="flex min-h-[30rem] w-full flex-col justify-center bg-[#edc677] text-center">
					<h1 className="text-8xl">About</h1>
				</div>
			</section>
			<section className="about-story">
				<div className="flex max-w-[48rem] flex-col items-center justify-center space-y-12 p-16 text-justify text-2xl">
					<p>
						Welcome to World Wide Access, your guide to navigating
						the journey of studying abroad. Whether you&apos;re
						dreaming of pursuing your education in the United
						States, Canada, New Zealand, or Australia, we&apos;re
						here to simplify the process and support you every step
						of the way.
					</p>
					<p>
						At World Wide Access, we are passionate about empowering
						students worldwide to achieve their academic goals. We
						provide comprehensive resources and expert guidance to
						make your study abroad experience seamless and
						successful.
					</p>
					<p>
						World Wide Access was born out of a personal journey. As
						former international students ourselves, We understand
						firsthand the challenges and uncertainties that come
						with navigating the process of obtaining a student visa
						and gaining admission to universities abroad. From
						grappling with visa applications to deciphering
						admission requirements across different countries like
						the USA, Canada, New Zealand, and Australia, We
						experienced the overwhelming lack of accessible and
						reliable information for prospective students. Driven by
						my own struggles and determination to help others avoid
						similar hurdles, we founded World Wide Access to bridge
						this gap. Our mission is simple yet profound: to empower
						and guide aspiring students worldwide towards their
						educational dreams. We believe that with the right
						knowledge, support, and resources, every student can
						embark on a successful journey of studying abroad.
					</p>
					<p>
						With years of experience in international education, we
						have helped countless students fulfill their dreams of
						studying abroad. We understand that each student&apos;s
						journey is unique, which is why we offer personalized
						assistance tailored to your specific needs and
						aspirations. From visa application processes to
						university admissions criteria, we provide up-to-date
						and detailed information to ensure you are well-informed
						at every stage. We offer step-by-step guidance on the
						visa application process for each country, ensuring you
						meet all requirements and deadlines. Additionally, we
						provide insights into admission criteria, application
						procedures, and tips for crafting compelling personal
						statements and essays. Our resources include articles,
						guides, and FAQs covering a wide range of topics related
						to studying abroad, from choosing the right program to
						adapting to life in a new country.
					</p>
				</div>
			</section>
			<section id="about-consultation">
				<div className="flex min-h-[32rem] flex-col items-center justify-center bg-[#282d30] p-12 text-center text-white">
					<h1 className="text-5xl text-[#b5944d]">
						Book a Consultation
					</h1>
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
	title: 'About | World Wide Access',
	description: 'Discover your journey',
	icons: {
		icon: 'https://worldwideaccess.org/image/logo.png',
		apple: 'https://worldwideaccess.org/image/logo.png',
	},
};
