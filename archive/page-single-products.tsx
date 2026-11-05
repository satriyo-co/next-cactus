import QtyStepper from '@/components/qty-stepper';
import Image from 'next/image';
import ProductImg01 from '@/assets/cactus_item_01.webp';

export default function ProductPage() {
	return (
		<main className="">
			<section className="product-list flex ">
				<div className="produc-img flex-1 flex justify-center">
					<Image src={ProductImg01} alt="produk kaktus" className="rounded-2xl h-[600px]" style={{ objectFit: 'cover' }} />
				</div>
				<div className="product-info flex-1">
					<h1 className="font-bold text-4xl mb-4 border-gray-300 pb-4">Soothing Mob Cactuar </h1>
					<div className="price font-semibold text-2xl mb-4">IDR 549.000</div>
					<div className="product-desc text-base">
						Soothing Mob Cactuar adalah kaktus hias mini berbulu halus yang aman disentuh dan mudah dirawat. Cocok untuk meja kerja atau sudut ruangan, cukup siram seminggu sekali dan letakkan di
						tempat terang. Setiap pembelian sudah termasuk pot keramik minimalis dan kartu panduan perawatan.
					</div>
					<div className="carting flex items-center mt-10 gap-5">
						<QtyStepper />
						<button className="border-2 border-black p-6 pt-2 pb-2 hover:bg-black hover:text-white transition cursor-pointer">Add to Cart</button>
					</div>
					<div className="specs mt-15 flex flex-col gap-1 text-xs text-gray-500 divide-y divide-gray-200 ">
						<div className="flex items-center gap-6 py-3">
							<p>
								<span className="font-semibold">Dimensi:</span> 12 × 12 × 18 cm (termasuk pot)
							</p>
						</div>
						<div className="flex items-center gap-6 py-3">
							<p>
								<span className="font-semibold">Berat kirim:</span> 800 gram
							</p>
						</div>
						<div className="flex items-center gap-6 py-3">
							<p>
								<span className="font-semibold">Cahaya:</span> terang tidak langsung, 4–6 jam/hari
							</p>
						</div>
						<div className="flex items-center gap-6 py-3">
							<p>
								<span className="font-semibold">Siram:</span> 1× seminggu, beginner friendly
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
