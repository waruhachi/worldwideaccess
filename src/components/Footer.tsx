import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="flex h-[35rem] w-full flex-col items-center justify-evenly bg-[#edc677] p-16 text-center text-black">
			<h1 className="mb-4 text-4xl">World Wide Access</h1>
			<h1 className="text-2xl">
				contact@worldwideaccess.org
				<br />
				(469) 584-6588
			</h1>
			<div className="flex flex-row">
				<Link href="https://www.linkedin.com" className="mx-2">
					<Image
						src="/svg/LinkedIn.svg"
						alt="LinkedIn"
						width={24}
						height={24}
					/>
				</Link>
				<Link href="https://www.facebook.com" className="mx-2">
					<Image
						src="/svg/Facebook.svg"
						alt="Facebook"
						width={24}
						height={24}
					/>
				</Link>
				<Link href="https://www.instagram.com" className="mx-2">
					<Image
						src="/svg/Instagram.svg"
						alt="Instagram"
						width={24}
						height={24}
					/>
				</Link>
				<Link href="https://www.twitter.com" className="mx-2">
					<Image
						src="/svg/Twitter.svg"
						alt="Twitter"
						width={24}
						height={24}
					/>
				</Link>
			</div>
		</footer>
	);
}