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
				{/* <div className="relative h-[65rem]">
					<Image
						className="h-full w-full object-cover"
						src="/image/background4.jpg"
						alt="Background 4"
						fill={true}
					/>
					<div className="absolute inset-0 bg-black opacity-15"></div>
				</div> */}
				<div className="flex flex-col items-center justify-center">
					<p className="w-[48rem] py-16 text-2xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Sodales neque sodales ut etiam sit amet
						nisl purus. Id neque aliquam vestibulum morbi blandit
						cursus risus at. Malesuada fames ac turpis egestas
						maecenas pharetra. Egestas sed sed risus pretium.
						Ullamcorper morbi tincidunt ornare massa eget egestas.
						Sodales neque sodales ut etiam. Arcu odio ut sem nulla
						pharetra diam sit. Mauris commodo quis imperdiet massa.
						Tempus iaculis urna id volutpat lacus. Fermentum et
						sollicitudin ac orci. Semper viverra nam libero justo
						laoreet. Placerat orci nulla pellentesque dignissim enim
						sit amet venenatis. Mus mauris vitae ultricies leo
						integer malesuada nunc vel risus. Urna porttitor rhoncus
						dolor purus non enim praesent elementum. Proin libero
						nunc consequat interdum varius sit. Sagittis nisl
						rhoncus mattis rhoncus urna neque viverra justo. Nunc
						aliquet bibendum enim facilisis. Tempus quam
						pellentesque nec nam aliquam sem et tortor. Laoreet sit
						amet cursus sit amet dictum sit.
					</p>
				</div>
				{/* <div className="relative h-[65rem]">
					<Image
						className="h-full w-full object-cover"
						src="/image/background5.jpg"
						alt="Background 5"
						fill={true}
					/>
					<div className="absolute inset-0 bg-black opacity-15"></div>
				</div> */}
				<div className="flex flex-col items-center justify-center">
					<p className="w-[48rem] pt-16 text-2xl">
						Eget mi proin sed libero enim. Justo laoreet sit amet
						cursus sit amet dictum. Imperdiet massa tincidunt nunc
						pulvinar sapien. Eget sit amet tellus cras. Vitae
						elementum curabitur vitae nunc sed velit dignissim.
						Commodo sed egestas egestas fringilla phasellus. Justo
						donec enim diam vulputate ut pharetra sit. Facilisis
						mauris sit amet massa vitae tortor condimentum. Sit amet
						consectetur adipiscing elit pellentesque. Pharetra vel
						turpis nunc eget. Purus faucibus ornare suspendisse sed
						nisi lacus sed viverra tellus. Lorem ipsum dolor sit
						amet. Quis blandit turpis cursus in hac habitasse
						platea. Bibendum ut tristique et egestas quis ipsum
						suspendisse ultrices. Sit amet consectetur adipiscing
						elit duis. Lectus mauris ultrices eros in cursus. Mollis
						nunc sed id semper risus in hendrerit. Turpis cursus in
						hac habitasse platea dictumst quisque sagittis purus.
						Dui faucibus in ornare quam viverra orci sagittis eu.
					</p>
					<p className="w-[48rem] py-16 text-2xl">
						Nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
						Pellentesque adipiscing commodo elit at imperdiet dui
						accumsan sit. Pharetra massa massa ultricies mi quis
						hendrerit dolor. Id donec ultrices tincidunt arcu non
						sodales. Viverra tellus in hac habitasse. Tellus integer
						feugiat scelerisque varius morbi enim. Suscipit
						adipiscing bibendum est ultricies integer quis auctor.
						Diam maecenas sed enim ut. Massa vitae tortor
						condimentum lacinia quis vel. Mauris commodo quis
						imperdiet massa tincidunt nunc pulvinar. Sagittis
						aliquam malesuada bibendum arcu vitae elementum.
						Elementum sagittis vitae et leo duis ut diam quam nulla.
						Auctor urna nunc id cursus metus aliquam eleifend. Eros
						in cursus turpis massa tincidunt dui ut.
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
