import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { PageTransition } from '../components/PageTransition';

export function Products() {
  const publishedProducts = products.filter(p => p.category === 'Application');
  const models = products.filter(p => p.category === 'AI Model');

  return (
    <PageTransition>
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <h1 className="text-7xl md:text-9xl font-display font-bold mb-8 tracking-tighter uppercase text-primary">Products</h1>
          <p className="text-2xl md:text-3xl font-medium text-secondary max-w-3xl leading-snug">
            Explore the software and experiences we're building.
          </p>
        </div>

        <div className="mb-40">
          {publishedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {publishedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-32 border-4 border-border border-dashed rounded-sm flex flex-col items-center justify-center text-center bg-surface">
              <p className="text-3xl font-bold text-primary mb-4">Nothing published yet.</p>
              <p className="text-xl font-bold text-secondary uppercase tracking-widest">CYNGENT is building.</p>
            </div>
          )}
        </div>

        {models.length > 0 && (
          <div className="border-t-4 border-primary pt-24">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-16 tracking-tighter uppercase">CYNGENT Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {models.map((model) => (
                <ProductCard key={model.id} product={model} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
