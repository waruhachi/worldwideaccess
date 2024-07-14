import type { Metadata } from 'next';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
	return (
		<>
			<section id="about-hero">
				<div className="flex h-[30rem] w-full flex-col justify-center bg-[#edc677] text-center">
					<h1 className="text-8xl">About</h1>
				</div>
			</section>
			<section className="about-story">
				<div className="flex flex-col items-center justify-center">
					<p className="w-[48rem] py-16 text-2xl">
						Welcome to World Wide Access, your guide to navigating
						the journey of studying abroad. Whether you&apos;re
						dreaming of pursuing your education in the United
						States, Canada, New Zealand, or Australia, we&apos;re
						here to simplify the process and support you every step
						of the way.
					</p>
					<p className="w-[48rem] py-16 text-2xl">
						At World Wide Access, we are passionate about empowering
						students worldwide to achieve their academic goals. We
						provide comprehensive resources and expert guidance to
						make your study abroad experience seamless and
						successful.
					</p>
					<p className="w-[48rem] pt-16 text-2xl">
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
					<p className="w-[48rem] py-16 text-2xl">
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
				<div className="flex h-[32rem] flex-col items-center justify-center bg-[#282d30] text-center text-white">
					<h1 className="m-auto text-8xl text-[#b5944d]">
						Book a Consultation
					</h1>
					<p className="text-4xl">
						We’ll walk you through every step of the process.
					</p>
					<div className="m-auto flex h-20 w-96 bg-rose-700 hover:bg-rose-800">
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
};
