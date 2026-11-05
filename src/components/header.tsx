import Link from 'next/link';
import Image from 'next/image';
import CactusLogo from '@/assets/cactus_logo.svg';
import { NavBar } from '@/components/navbar';

export default function Header() {
	return (
		<div id="innerHeader" className="flex justify-between p-4 max-w-[1200px] w-full">
			<div className="flex justify-start items-center">
				<Link href="/">
					<Image className="block h-5 w-auto mr-auto" src={CactusLogo} alt="Logo Cactus Store" />
				</Link>
			</div>
			<NavBar />
		</div>
	);
}
