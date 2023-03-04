'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-secondary mb-4 text-sm">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">${product.price}</span>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition-colors">
          Buy
        </button>
      </div>
    </motion.div>
  );
} 