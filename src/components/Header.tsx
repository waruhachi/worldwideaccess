import Link from 'next/link';

interface HeaderProps {
	color: string;
}

export default function Header({ color }: HeaderProps) {
	return (
		<header
			className={`absolute top-0 z-10 flex h-40 w-full justify-between p-16 text-${color}`}
		>
			<Link href="/" className="text-3xl">
				World Wide Access
			</Link>
			<div className="flex flex-row text-xl">
				<Link href="/about" className="pr-8">
					About
				</Link>
				<Link href="/services" className="pr-8">
					Services
				</Link>
				<Link href="/consultation" className="pr-8">
					Book a Consultation
				</Link>
			</div>
		</header>
	);
}
