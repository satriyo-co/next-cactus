'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLinkClassName } from '@/lib/navigation';

const links = [
	{ href: '/', label: 'Beranda' },
	{ href: '/products', label: 'Katalog' },
	{ href: '/cart', label: 'Keranjang' },
];

export function NavBar() {
	const pathname = usePathname();
	return (
		<nav aria-label="Navigasi Utama" className="flex gap-4">
			{links.map((link) => (
				<Link key={link.href} href={link.href} className={getLinkClassName(pathname, link.href)}>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
