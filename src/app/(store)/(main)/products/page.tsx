import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts } from '@/lib/product-db-helper'; // Helper pembaca JSON
import { ProductCard } from '@/components/product-card'; // import komponen Product Card

export default async function CatalogPage() {
	// ambil seluruh daftar produk dari helper
	const products = await getAllProducts();
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{/* Looping array produk satu per satu menggunakan .map() */}
			{products.map((product) => (
				<ProductCard key={product.id} product={product} addDescription />
			))}
		</div>
	);
}
