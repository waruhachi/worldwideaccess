import {
	Body,
	Container,
	Head,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
	Tailwind,
} from '@react-email/components';
import * as React from 'react';

interface ConsultationConfirmation {
	name: string;
	email: string;
	phone: string;
	date: string;
	time: string;
	message?: string;
}

const baseURL =
	process.env.NODE_ENV === 'development'
		? process.env.LOCAL_DOMAIN
		: process.env.PROD_DOMAIN;

export default function ClientConsultationConfirmation({
	name,
	email,
	phone,
	date,
	time,
	message,
}: ConsultationConfirmation) {
	return (
		<Html>
			<Head />
			<Preview>New Consultation Booking</Preview>
			<Tailwind
				config={{
					theme: {
						extend: {
							spacing: {
								0: '0px',
								20: '20px',
								45: '45px',
							},
						},
					},
				}}
			>
				<Body className="font-sans text-base">
					<Img
						src={`${baseURL}/image/logo.png`}
						width="200"
						height="200"
						alt="World Wide Access Logo"
						className="mx-auto my-20"
					/>
					<Container className="p-45">
						<Section>
							<Row>
								<Text className="text-base">Dear {name},</Text>
							</Row>
							<Row>
								<Text className="text-base">
									Thank you for scheduling a consultation with
									us. We are pleased to confirm your
									appointment as follows:
								</Text>
							</Row>
						</Section>

						<Section>
							<Row>Date: {date}</Row>
							<Row>Time: {time}</Row>
							<Row>
								<Text className="text-base">
									During this consultation, we will discuss
									the points you mentioned:
								</Text>
								<Text className="text-base">{message}</Text>
								<Text className="text-base">
									Please feel free to prepare any additional
									questions or topics you would like to cover.
								</Text>
							</Row>
							<Row>
								<Text className="text-base">
									If you need to reschedule or have any
									questions prior to our meeting, do not
									hesitate to contact us at
									<Link href="mailto:info@worldwideaccess.org.">
										{' '}
										info@worldwideaccess.org.
									</Link>
								</Text>
							</Row>
							<Row>
								<Text className="text-base">
									We look forward to speaking with you.
								</Text>
							</Row>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
