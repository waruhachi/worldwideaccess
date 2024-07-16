import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';

interface HeaderProps {
	color: string;
}

export default function Header({ color }: HeaderProps) {
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		if (showMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [showMenu]);

	return (
		<header
			className={`absolute top-0 z-10 flex h-40 w-full items-center justify-between xs:p-8 sm:p-16 text-${color}`}
		>
			<Link href="/" className="text-3xl">
				World Wide Access
			</Link>
			<div className="hidden flex-row text-xl lg:flex">
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
			<div className="block lg:hidden">
				<Menu
					size={24}
					color={color}
					onClick={() => setShowMenu(!showMenu)}
				/>
			</div>
			{showMenu && (
				<div className="absolute inset-0 z-20 h-screen w-full bg-white p-16 text-black shadow-lg">
					<X
						size={24}
						color="black"
						onClick={() => setShowMenu(!showMenu)}
						className="absolute right-8 top-8"
					/>
					<div className="flex h-full flex-col items-center justify-around space-y-4 text-3xl">
						<Link href="/about" onClick={() => setShowMenu(false)}>
							About
						</Link>
						<Link
							href="/services"
							onClick={() => setShowMenu(false)}
						>
							Services
						</Link>
						<Link
							href="/consultation"
							onClick={() => setShowMenu(false)}
						>
							Book a Consultation
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
