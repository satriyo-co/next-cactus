'use client';
import { useState } from 'react';

export default function QtyStepper() {
	const [qty, setQty] = useState(1);
	return (
		<div className="suming flex items-center gap-5">
			<button onClick={() => setQty((q) => Math.max(1, q - 1))} className="min text-2xl font-extralight cursor-pointer">
				–
			</button>
			<div className="num w-10 text-center border-b-1 pb-1">{qty}</div>
			<button onClick={() => setQty((q) => q + 1)} className="plus text-2xl font-extralight cursor-pointer">
				+
			</button>
		</div>
	);
}
