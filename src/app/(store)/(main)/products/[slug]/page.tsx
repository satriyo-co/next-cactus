import QtyStepper from '@/components/qty-stepper';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductsBySlug } from '@/lib/product-db-helper'; // Helper pembaca JSON

type ProductPageProps = {
	params: Promise<{ slug: string }>; // Format params async wajib di Next.js 15+
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
	// ambil slug dari URL
	const { slug } = await params;
	// ambil data produk dari helper db
	const product = await getProductsBySlug(slug);
	// jika product tidak ada di db, redirect ke 404
	if (!product) {
		notFound();
	}
	return (
		<main className="">
			<section className="product-list flex ">
				<div className="produc-img flex-1 flex justify-center">
					<Image src={product.image} alt={product.title} className="rounded-2xl object-cover" width={500} height={600} />
				</div>
				<div className="product-info flex-1">
					<h1 className="font-bold text-4xl mb-4 border-gray-300 pb-4">{product.title}</h1>
					<div className="price font-semibold text-2xl mb-4">IDR {product.price.toLocaleString('id-ID')}</div>
					<div className="product-desc text-base">{product.description}</div>
					<div className="carting flex items-center mt-10 gap-5">
						<QtyStepper />
						<button className="border-2 border-black p-6 pt-2 pb-2 hover:bg-black hover:text-white transition cursor-pointer">Add to Cart</button>
					</div>
					<div className="specs mt-15 flex flex-col gap-1 text-xs text-gray-500 divide-y divide-gray-200 ">
						<div className="flex items-center gap-6 py-3">
							<p>
								<span className="font-semibold">Dimensi:</span> {product.dimension} cm (termasuk pot)
							</p>
						</div>
						<div className="flex items-center gap-6 py-3">
							<p>
								<span className="font-semibold">Berat kirim:</span> {product.weight} gram
							</p>
						</div>
						<div className="flex items-center gap-6 py-3">
							<p>
								<span className="font-semibold">Cahaya:</span> {product.light}
							</p>
						</div>
						<div className="flex items-center gap-6 py-3">
							<p>
								<span className="font-semibold">Siram:</span> {product.siram}
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
