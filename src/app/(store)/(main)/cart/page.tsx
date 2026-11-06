import Image from 'next/image';
import Cactus01 from '/images/products/cactus_item_06.webp';
import QtyStepper from '@/components/qty-stepper';

export default function Cart() {
	return (
		<main className="mb-30 mt-10">
			<h1 className="text-4xl mb-10">This is Cart Dummy Page</h1>
			<ul className="my-10 border-t-1">
				<li className="flex w-full items-center gap-12 justify-between border-b-1 py-5">
					<Image src="/images/products/cactus_item_06.webp" alt="cactus_item_06" width={100} height={200} className="object-cover group-hover:scale-110 transition duration-500" />
					<div className="after:content-['x_delete'] after:absolute after:hidden hover:after:block after:text-xs after:pt-1 after:font-light after:text-orange-600 hover:after:cursor-pointer">
						Spiky Guardian Echinopsis
						<br />
					</div>
					<div>Rp 410.000</div>
					<QtyStepper />
				</li>
			</ul>

			<div className="telling max-w-[800] text-base text-gray-600">
				<p>
					we&#39;re still building this page we&#39;re still building this page we&#39;re still building this page we&#39;re still building this page we&#39;re still building this page we&#39;re still
					building this page we&#39;re still building this page
				</p>
			</div>
		</main>
	);
}
