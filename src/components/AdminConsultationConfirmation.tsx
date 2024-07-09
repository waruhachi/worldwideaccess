import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
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

export default function AdminConsultationConfirmation({
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
						width="184"
						height="75"
						alt="World Wide Access Logo"
						className="mx-auto my-20"
					/>
					<Container className="p-45">
						<Section>
							<Row>
								<Text className="text-base">Name: {name}</Text>
							</Row>
							<Row>
								<Text className="text-base">
									Email: {email}
								</Text>
							</Row>
							<Row>
								<Text className="text-base">
									Phone: {phone}
								</Text>
							</Row>
							<Row>
								<Text className="text-base">Date: {date}</Text>
							</Row>
							<Row>
								<Text className="text-base">Time: {time}</Text>
							</Row>
							<Row>
								<Text className="text-base">
									Message: {message}
								</Text>
							</Row>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
