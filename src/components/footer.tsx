import Link from 'next/link';
import Image from 'next/image';
import CactusLogo from '@/assets/cactus_logo.svg';
import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="flex justify-center p-10 text-sm mt-10">
			<div className="innerFooter flex justify-between w-full gap-[30px] max-w-[1200px] ">
				<div className="foot01 flex-2">
					<Link href="/">
						<Image className="max-w-[200px]" src={CactusLogo} alt="Logo Cactus Store" />
					</Link>
					<div className="store-desc mt-5">
						<p>Cactus Store — toko kaktus hias pilihan untuk mempercantik ruanganmu. Tanaman sehat, pot cantik, dikirim aman ke seluruh Indonesia. </p>
					</div>
				</div>
				<div className="foot02 flex-1">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/blog">Blog</Link>
						</li>
						<li>
							<Link href="/">Privacy Policy</Link>
						</li>
					</ul>
				</div>
				<div className="foot03 flex-2 flex flex-col gap-2">
					<div className="flex items-start gap-2 ">
						<MapPin size={16} className="mt-1 shrink-0" />
						<p>Jl Bumi Raya, Kel.Mangunharjo, Kec.Mbrosot, Jawa Tengah</p>
					</div>
					<div className="flex items-start gap-2">
						<Phone size={16} className="mt-1 shrink-0" />
						<p>(62) 271 1234567</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
