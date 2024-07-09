'use server';

import { Resend } from 'resend';

import ClientConsultationConfirmation from '@/components/ClientConsultationConfirmation';
import AdminConsultationConfirmation from '@/components/AdminConsultationConfirmation';

export default async function sendEmail(formData: FormData) {
	try {
		const rawFormData = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			phone: formData.get('phone') as string,
			date: formData.get('date') as string,
			time: formData.get('time') as string,
			message: formData.get('message') as string,
		};

		const resend = new Resend(process.env.RESEND_API_KEY);

		const { data, error } = await resend.batch.send([
			{
				from: 'World Wide Access <consultation@worldwideaccess.org>',
				to: [rawFormData.email],
				subject: 'New Consultation Request',
				react: ClientConsultationConfirmation(rawFormData),
			},
			{
				from: 'World Wide Access <consultation@worldwideaccess.org>',
				to: ['info.worldwideaccess@gmail.com'],
				subject: 'New Consultation Request',
				react: AdminConsultationConfirmation(rawFormData),
			},
		]);

		if (data) return true;

		if (error) {
			console.log('Error: ', error);
			return false;
		}
	} catch (error) {
		console.log('Catch: ', error);
		return false;
	}
}
