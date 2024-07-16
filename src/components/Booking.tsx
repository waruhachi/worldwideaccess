'use client';

import { useState } from 'react';

import USCalBooking from '@/components/USCalBooking';
import AUCalBooking from '@/components/AUCalBooking';

export default function Booking() {
	const [currentBooking, setCurrentBooking] = useState('US');

	return (
		<section id="consultation-booking">
			<div className="my-8 flex justify-center">
				<button
					className={`mx-2 rounded-lg px-4 py-2 text-white ${currentBooking === 'US' ? 'bg-rose-700' : 'bg-gray-700 hover:bg-rose-700'}`}
					onClick={() => setCurrentBooking('US')}
				>
					Book US Consultation
				</button>
				<button
					className={`mx-2 rounded-lg px-4 py-2 text-white ${currentBooking === 'AU' ? 'bg-rose-700' : 'bg-gray-700 hover:bg-rose-700'}`}
					onClick={() => setCurrentBooking('AU')}
				>
					Book AU Consultation
				</button>
			</div>
			{currentBooking === 'AU' ? <AUCalBooking /> : <USCalBooking />}
		</section>
	);
}
