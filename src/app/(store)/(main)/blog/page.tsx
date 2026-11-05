import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog-db-helper';

export default async function BlogPage() {
	// 1. Panggil data blog lewat helper
	const posts = await getAllPosts();

	return (
		<main className="max-w-6xl mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-800">Jurnal & Berita Kaktus 🌵</h1>
				<p className="text-gray-500 mt-2">Tips perawatan tanaman, panduan sukulen, dan cerita seputar kebun kaktus.</p>
			</div>

			{/* Grid Kartu Blog */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{posts.map((post) => (
					<article key={post.id} className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
						{/* Perubahan utama: href mengarah ke post.slug */}
						<Link href={`/blog/${post.slug}`}>
							<div className="relative w-full h-48 bg-gray-100">
								<Image src={`https://picsum.photos/seed/${post.id}/600/400`} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
							</div>

							<div className="p-5">
								<span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full uppercase">Artikel #{post.id}</span>
								<h2 className="font-bold text-lg text-gray-800 mt-3 capitalize line-clamp-2">{post.title}</h2>
								<p className="text-gray-500 text-sm mt-2 line-clamp-3 leading-relaxed">{post.body}</p>
							</div>
						</Link>
					</article>
				))}
			</div>
		</main>
	);
}
