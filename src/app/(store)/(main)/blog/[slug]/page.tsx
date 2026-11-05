import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog-db-helper'; // Import helper pencarian berdasarkan slug

type PostPageProps = {
	params: Promise<{ slug: string }>; // Menangkap `slug` secara async (Next.js 15+)
};

export default async function PostPage({ params }: PostPageProps) {
	// 1. Tangkap `slug` dari URL (misal: /blog/tips-merawat-kaktus)
	const { slug } = await params;

	// 2. Ambil data 1 post spesifik dari helper berdasarkan slug
	const post = await getPostBySlug(slug);

	// 3. Tampilkan halaman 404 jika artikel tidak ditemukan
	if (!post) {
		notFound();
	}

	return (
		<main className="max-w-3xl mx-auto px-4 py-10">
			{/* Tombol Navigasi Kembali */}
			<Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-green-600 mb-6 transition">
				← Kembali ke Katalog Blog
			</Link>
			<article className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
				{/* Gambar Sampul */}
				<div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6 bg-gray-100">
					<Image src={`https://picsum.photos/seed/${post.id + 110}/1200/600`} alt={post.title} fill priority className="object-cover" />
				</div>

				{/* Badge & Meta Information */}
				<div className="flex items-center gap-3">
					<span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase">Artikel #{post.id}</span>
					<span className="text-xs text-gray-400">Penulis: User #{post.userId}</span>
				</div>

				{/* Judul & Isi Artikel */}
				<h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-4 capitalize leading-snug">{post.title}</h1>

				<p className="mt-6 text-gray-700 leading-relaxed text-base whitespace-pre-line">{post.body}</p>

				{/* Tag / Kategori Artikel (jika ada) */}
				{post.tags && post.tags.length > 0 && (
					<div className="flex gap-2 mt-8 pt-4 border-t border-gray-100">
						{post.tags.map((tag) => (
							<span key={tag} className="bg-gray-100 text-xs px-3 py-1 rounded-full text-gray-600">
								#{tag}
							</span>
						))}
					</div>
				)}
			</article>
		</main>
	);
}
