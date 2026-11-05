import Image from 'next/image';
import Link from 'next/link';
import HeroImg from '@/assets/cactus_hero.webp';
import { getAllProducts } from '@/lib/product-db-helper'; // Helper pembaca JSON
import { ProductCard } from '@/components/product-card'; // import komponen Product Card

export default async function HomePage() {
  const products = await getAllProducts();
  return (
    <>
      <main>
        <section id="hero ">
          <h1 className=" text-center font-bold">Selamat datang di Cactus Store! 🌵</h1>
          <p className="mb-2 text-gray-600 text-center p-2">Toko online cactus terbaik untuk mempercantik ruanganmu.</p>
          <Link href="/products">
            <Image src={HeroImg} alt="hero_welcome" className=" rounded-4xl hover:opacity-80 transition" />
          </Link>
        </section>
        <section id="products">
          <h2 className="text-center text-4xl font-bold m-10">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Looping array produk satu per satu menggunakan .map() */}
            {/*{products.slice(2, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}*/}
            {products
              .filter((product) => ['kaktus-3', 'kaktus-6', 'kaktus-8'].includes(product.id))
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
