import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 999,
    image: 'https://picsum.photos/200/300?random=1',
    description: 'The most powerful iPhone ever.'
  },
  {
    id: 2,
    name: 'MacBook Air',
    price: 1299,
    image: 'https://picsum.photos/200/300?random=2',
    description: 'Power. It\'s in the Air.'
  },
  {
    id: 3,
    name: 'iPad Pro',
    price: 799,
    image: 'https://picsum.photos/200/300?random=3',
    description: 'Supercharged by M2.'
  },
  {
    id: 4,
    name: 'Apple Watch',
    price: 399,
    image: 'https://picsum.photos/200/300?random=4',
    description: 'A healthy leap ahead.'
  },
  {
    id: 5,
    name: 'AirPods Pro',
    price: 249,
    image: 'https://picsum.photos/200/300?random=5',
    description: 'Magic remastered.'
  },
  {
    id: 6,
    name: 'Mac Studio',
    price: 1999,
    // image: '/products/mac.jpg',
    image: 'https://picsum.photos/200/300?random=6',
    description: 'Supercharged by M2 Ultra.'
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
} 