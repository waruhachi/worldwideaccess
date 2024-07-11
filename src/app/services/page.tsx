import type { Metadata } from 'next';

import Link from 'next/link';

export default function Services() {
	return (
		<>
			<section id="service-hero">
				<div className="flex h-[30rem] w-full flex-col justify-center bg-[#edc677] text-center">
					<h1 className="text-8xl">Services</h1>
				</div>
			</section>
			<section id="service-services">
				<div className="flex w-full flex-col p-12 lg:flex-row">
					<h2 className="flex flex-1 text-4xl">
						Education Consultancy
					</h2>
					<div className="flex flex-1 flex-col">
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Course and University Selection
							</h1>
							<p className="text-lg">
								Advising students on suitable universities and
								courses based on their academic background,
								career goals, and budget.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">Test Preparation</h1>
							<p className="text-lg">
								Providing guidance and resources for
								standardized tests such as TOEFL, IELTS, GRE,
								GMAT, etc.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Application Assistance
							</h1>
							<p className="text-lg">
								Helping with the application process, including
								filling out forms, writing essays, and preparing
								necessary documents.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Interview Preparation
							</h1>
							<p className="text-lg">
								Coaching students for university interviews, if
								required.
							</p>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col p-12 lg:flex-row">
					<h2 className="flex flex-1 text-4xl">
						Visa Consultancy Services
					</h2>
					<div className="flex flex-1 flex-col">
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">Visa Guidance</h1>
							<p className="text-lg">
								Providing information on visa requirements and
								assisting with the visa application process.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Document Preparation
							</h1>
							<p className="text-lg">
								Ensuring all required documents are properly
								filled out and submitted.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Interview Preparation
							</h1>
							<p className="text-lg">
								Preparing students for visa interviews,
								including mock interviews and guidance on
								interview etiquette.
							</p>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col p-12 lg:flex-row">
					<h2 className="flex flex-1 text-4xl">Other Services</h2>
					<div className="flex flex-1 flex-col">
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Financial Planning
							</h1>
							<p className="text-lg">
								Offering advice on managing finances abroad,
								including tuition fees, living expenses, and
								currency exchange.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Legal and Regulatory Compliance
							</h1>
							<p className="text-lg">
								Ensuring that all processes comply with the
								immigration laws and regulations of the
								destination country.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Accommodation Assistance
							</h1>
							<p className="text-lg">
								Helping students find suitable accommodation
								options near their chosen university.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Post-Arrival Support
							</h1>
							<p className="text-lg">
								Providing information on local laws, culture,
								and amenities in the destination country.
							</p>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">Follow-up Support</h1>
							<p className="text-lg">
								Assisting students during their stay abroad,
								addressing any issues that may arise and
								providing ongoing support.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="service-consultation">
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
	title: 'Services | World Wide Access',
	description: 'Generated by create next app',
};
