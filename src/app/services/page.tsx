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
								Assessment and Profile Evaluation
							</h1>
							<ul className="ml-8 list-disc text-lg">
								<li>
									<strong>Student Profile Assessment</strong>:
									Evaluating academic qualifications,
									including grades, test scores (SAT, ACT,
									etc.), extracurricular activities, and
									achievements.
								</li>
								<br />
								<li>
									<strong>
										Career Goals and Aspirations
									</strong>
									: Understanding the student&apos;s career
									objectives to recommend suitable courses and
									universities that align with their interests
									and future plans.
								</li>
							</ul>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Course and University Selection
							</h1>
							<ul className="ml-8 list-disc text-lg">
								<li>
									<strong>Research and Shortlisting</strong>:
									Conducting thorough research on universities
									and courses worldwide that match the
									student&apos;s profile and preferences.
									Considering factors such as academic
									reputation, faculty expertise, facilities,
									location, and campus culture.
								</li>
								<br />
							</ul>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Application Assistance
							</h1>
							<ul className="ml-8 list-disc text-lg">
								<li>
									<strong>Application Strategy</strong>:
									Advising on the application process,
									including timelines, required documents
									(transcripts, letters of recommendation),
									and standardized tests (TOEFL, IELTS, GRE,
									GMAT, etc.). Assisting with drafting
									personal statements or essays.
								</li>
								<br />
								<li>
									<strong>Application Support</strong>:
									Helping with filling out forms and preparing
									necessary documents.
								</li>
							</ul>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Test and Interview Preparation
							</h1>
							<ul className="ml-8 list-disc text-lg">
								<li>
									<strong>Test Preparation</strong>: Providing
									guidance and resources for standardized
									tests.
								</li>
								<br />
								<li>
									<strong>Interview Preparation</strong>:
									Coaching students for university and visa
									interviews, including mock interviews and
									guidance on interview etiquette.
								</li>
							</ul>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Financial Planning
							</h1>
							<ul className="ml-8 list-disc text-lg">
								<li>
									<strong>Tuition Fees</strong>: Providing
									detailed information on tuition fees,
									payment methods, deadlines, and assistance
									in exploring scholarships or financial aid
									options.
								</li>
								<br />
								<li>
									<strong>Living Expenses</strong>: Offering
									guidance on estimating and managing living
									costs, including accommodation, food,
									transportation, and personal expenses.
									Providing budgeting tips and cost-saving
									strategies.
								</li>
								<br />
								<li>
									<strong>Currency Exchange</strong>: Advising
									on currency exchange rates, fees, and
									methods for transferring funds.
								</li>
							</ul>
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
							<ul className="ml-8 list-disc text-lg">
								<li>
									<strong>Visa Requirements</strong>:
									Providing information on visa requirements
									and assisting with the visa application
									process.
								</li>
								<br />
								<li>
									<strong>Document Preparation</strong>:
									Ensuring all required documents are properly
									filled out and submitted.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col p-12 lg:flex-row">
					<h2 className="flex flex-1 text-4xl">Other Services</h2>
					<div className="flex flex-1 flex-col">
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Accommodation Assistance
							</h1>
							<ul className="ml-8 list-disc text-lg">
								<li>
									<strong>Research and Shortlisting</strong>:
									Assisting students in researching
									accommodation options, including student
									residences, private rentals, and homestays.
								</li>
								<br />
								<li>
									<strong>Application Support</strong>:
									Helping navigate the application process for
									accommodation, including required documents,
									deadlines, and contacting landlords or
									providers.
								</li>
								<br />
								<li>
									<strong>Safety and Convenience</strong>:
									Advising on safety, proximity to campus,
									amenities, and suitability based on
									preferences and budget.
								</li>
							</ul>
						</div>
						<div className="mt-20 lg:mb-20 lg:mt-0">
							<h1 className="mb-8 text-2xl">
								Post-Arrival Support
							</h1>
							<ul className="ml-8 list-disc text-lg">
								<li>
									<strong>Orientation</strong>: Providing
									comprehensive orientation on local laws,
									cultural norms, emergency contacts, and
									healthcare services.
								</li>
								<br />
								<li>
									<strong>Academic Support</strong>: Offering
									guidance on academic resources and support
									services, such as academic advisors,
									tutoring services, library facilities, and
									study groups.
								</li>
								<br />
								<li>
									<strong>Social Integration</strong>:
									Facilitating opportunities for social
									integration through student clubs, cultural
									events, language exchange programs, and
									extracurricular activities.
								</li>
								<br />
								<li>
									<strong>Health and Well-being</strong>:
									Providing information on healthcare
									facilities, health insurance requirements,
									and wellness resources.
								</li>
								<br />
								<li>
									<strong>Compliance Assurance</strong>:
									Ensuring all processes comply with the
									immigration laws and regulations of the
									destination country.
								</li>
								<br />
								<li>
									<strong>Ongoing Assistance</strong>:
									Assisting students during their stay abroad,
									addressing any issues that may arise, and
									providing ongoing support.
								</li>
							</ul>
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
	description: 'Discover your journey',
};
