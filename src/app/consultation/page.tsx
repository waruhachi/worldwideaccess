import type { Metadata } from 'next';
import ConsultationForm from '@/components/ConsultationForm';

export default function Consultation() {
	return (
		<>
			<section id="consultation-hero">
				<div className="flex h-[32rem] w-full flex-col items-center justify-center bg-[#edc677] text-center">
					<h1 className="text-8xl">Book a Consultation</h1>
				</div>
			</section>
			<ConsultationForm />
		</>
	);
}

export const metadata: Metadata = {
	title: 'Book a Consultation | World Wide Access',
	description: 'Discover your journey',
};
