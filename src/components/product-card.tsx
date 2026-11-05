import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/product-db-helper';

type ProductCardProps = {
	product: Product;
	addDescription?: boolean; // Opsional: default-nya false
};

export function ProductCard({ product, addDescription = false }: ProductCardProps) {
	return (
		<Link key={product.id} href={`/products/${product.slug}`} className="group bg-white overflow-hidden  transition duration-300 flex flex-col justify-between">
			<div>
				{/*pembungkus gambar produk*/}
				<div className="relative w-full h-100 bg-gray-50 overflow-hidden hover:shadow-md rounded-2xl">
					<Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition duration-500" />
				</div>
				{/* Konten Info Produk */}
				<div className="p-5">
					<h2 className="text-lg font-bold text-gray-800 group-hover:text-lime-800 transition">{product.title}</h2>
					{/* Tampilkan deskripsi HANYA jika withDescription bernilai true */}
					{addDescription && <p className="text-gray-500 text-sm mt-1 mb-2 line-clamp-4">{product.description}</p>}
				</div>
				{/* Area Harga & Status */}
				<div className="px-5 pb-5 pt-2 -mt-[15px] flex items-center justify-between border-t border-gray-50">
					<span className="text-lg font-300 text-300">Rp {product.price.toLocaleString('id-ID')}</span>
					<span className="text-xs text-gray-400 font-medium">Stok: {product.stock}</span>
				</div>
			</div>
		</Link>
	);
}
