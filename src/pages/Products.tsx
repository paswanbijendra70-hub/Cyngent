import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { PageTransition } from '../components/PageTransition';

export function Products() {
  const publishedProducts = products.filter(p => p.category === 'Application');
  const models = products.filter(p => p.category === 'AI Model');

  return (
    <PageTransition>
      <div className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">Products</h1>
          <p className="text-lg text-secondary max-w-2xl leading-relaxed">
            Explore the software and experiences we're building.
          </p>
        </div>

        <div className="mb-24">
          {publishedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 border border-border border-dashed rounded-sm flex flex-col items-center justify-center text-center">
              <p className="text-lg font-medium text-primary mb-2">Nothing published yet.</p>
              <p className="text-secondary">CYNGENT is building.</p>
            </div>
          )}
        </div>

        {models.length > 0 && (
          <div className="border-t border-border pt-16">
            <h2 className="text-2xl font-display font-semibold mb-8">CYNGENT Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
