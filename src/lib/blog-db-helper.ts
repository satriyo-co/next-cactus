// src/lib/blog-db.ts

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  slug?: string; // Tipe opsional untuk menyimpan slug
};

// Helper untuk mengubah teks judul jadi slug URL (misal: "Hello World!" -> "hello-world")
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Hapus karakter khusus
    .replace(/[\s_-]+/g, '-') // Ganti spasi/underscore dengan dash (-)
    .replace(/^-+|-+$/g, '');
}

/**
 * Mengambil seluruh daftar postingan lengkap dengan slug-nya
 */
export async function getAllPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://dummyjson.com/posts', {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error('Gagal fetch blog');

    const data = await res.json();

    // Tambahkan bidang slug ke setiap post
    return data.posts.map((post: Post) => ({
      ...post,
      slug: slugify(post.title),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

/**
 * Mencari 1 postingan berdasarkan `slug`
 */
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
