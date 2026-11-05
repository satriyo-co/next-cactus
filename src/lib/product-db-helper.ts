// src/lib/product-db.ts
import productsData from '@/data/products.json';

// 1. Definisi tipe data Product sesuai seluruh bidang (fields) di JSON kita
export type Product = {
	id: string;
	slug: string;
	title: string;
	image: string;
	price: number;
	stock: number;
	description: string;
	dimension: string;
	weight: number;
	light: string;
	siram: string;
};

/**
 * Mengambil 1 produk spesifik berdasarkan slug dari URL (untuk halaman /single-product)
 */
export async function getProductsBySlug(slug: string): Promise<Product | undefined> {
	return (productsData as Product[]).find((product) => product.slug === slug);
}

/**
 * Mengambil seluruh daftar produk (akan digunakan untuk halaman katalog (halaman/products) nanti)
 */
export async function getAllProducts(): Promise<Product[]> {
	return productsData as Product[];
}
