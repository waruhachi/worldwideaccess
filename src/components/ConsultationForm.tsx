'use client';

import { useRef, useState } from 'react';
import sendEmail from '@/server/send';

export default function ConsultationForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [showConfirmation, setShowConfirmation] = useState(false);

	async function handleSubmit(formData: FormData) {
		const response = await sendEmail(formData);

		if (response) setShowConfirmation(true);
	}

	return (
		<>
			<section id="consultation-form">
				<form
					className="mx-auto my-0 grid max-w-[38rem] gap-2 py-12"
					action={handleSubmit}
					ref={formRef}
				>
					<label htmlFor="name" className="font-bold">
						Full Name:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="box-border w-full rounded-md border-2 border-black p-2 text-lg"
					/>
					<br />
					<br />

					<label htmlFor="email" className="font-bold">
						Email Address:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="box-border w-full rounded-md border-2 border-black p-2 text-lg"
					/>
					<br />
					<br />

					<label htmlFor="phone" className="font-bold">
						Phone Number:
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						required
						className="box-border w-full rounded-md border-2 border-black p-2 text-lg"
					/>
					<br />
					<br />

					<label htmlFor="date" className="font-bold">
						Preferred Date:
					</label>
					<input
						type="date"
						id="date"
						name="date"
						required
						className="box-border w-full rounded-md border-2 border-black p-2 text-lg"
					/>
					<br />
					<br />

					<label htmlFor="time" className="font-bold">
						Preferred Time:
					</label>
					<input
						type="time"
						id="time"
						name="time"
						required
						className="box-border w-full rounded-md border-2 border-black p-2 text-lg"
					/>
					<br />
					<br />

					<label htmlFor="message" className="font-bold">
						Topics of Interest:
					</label>
					<textarea
						id="message"
						name="message"
						className="box-border min-h-24 w-full resize-y rounded-md border-2 border-black p-2 text-lg"
					></textarea>
					<br />
					<br />

					<input
						type="submit"
						value="Submit"
						className="cursor-pointer rounded-md border-4 border-none bg-rose-700 px-4 py-2 text-lg text-white hover:bg-rose-800"
					/>
				</form>
			</section>
			{showConfirmation && (
				<section id="consultation-confirmation">
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
						<div className="rounded-lg bg-white p-8 shadow-lg">
							<h2 className="mb-4 text-2xl font-bold">
								Consultation Request Sent!
							</h2>
							<p>
								Your consultation request has been successfully
								submitted.
							</p>
							<button
								onClick={() => {
									setShowConfirmation(false);
									formRef?.current?.reset();
								}}
								className="mt-4 rounded-lg bg-rose-700 px-4 py-2 text-white hover:bg-rose-800"
							>
								Close
							</button>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
