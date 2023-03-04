import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <main>
      <section className="pt-24 pb-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-8 animate-fade-in">
            Store. The best way to buy the products you love.
          </h1>
          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
