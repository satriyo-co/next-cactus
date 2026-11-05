import Link from 'next/link';

export default function Login() {
	return (
		<main className="mt-30 mb-30">
			<h1 className="text-center text-4xl mb-10">This is Product Gallery Page</h1>
			<div className="telling max-w-[800] text-base text-gray-600">
				<p>
					to access one of our products please refer to{' '}
					<Link href="/products/single-product" className="text-blue-700 border-b-1 border-dashed">
						this page
					</Link>
				</p>
			</div>
		</main>
	);
}
