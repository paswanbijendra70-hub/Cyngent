import { Link } from 'react-router-dom';
import { CyngentMark } from '../components/CyngentMark';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export function Home() {
  const featuredProduct = products.find(p => p.featured);

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-40 flex flex-col items-start">
          <div className="mb-12">
            <CyngentMark className="w-24 h-24" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-3xl leading-tight">
            Building intelligent technology.
          </h1>
          
          <p className="text-lg md:text-xl text-secondary max-w-2xl mb-12 leading-relaxed">
            CYNGENT is an independent technology company building intelligent systems, software, and new digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to="/products"
              className="px-6 py-3 bg-primary text-background font-medium rounded-sm hover:bg-white transition-colors"
            >
              Explore Products
            </Link>
            <Link 
              to="/about"
              className="px-6 py-3 border border-border text-primary font-medium rounded-sm hover:bg-surface transition-colors"
            >
              About CYNGENT
            </Link>
          </div>
        </section>

        {/* Featured Product */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="border-t border-border pt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-12">Featured</h2>
            
            {featuredProduct ? (
              <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
                <div className="flex-1">
                  <h3 className="text-4xl font-display font-semibold mb-6">{featuredProduct.name}</h3>
                  <p className="text-lg text-secondary mb-8 max-w-lg leading-relaxed">
                    A conversational AI application developed as part of the CYNGENT ecosystem.
                  </p>
                  {featuredProduct.status === 'Available' && featuredProduct.url ? (
                    <a 
                      href={featuredProduct.url}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group"
                    >
                      Open App 
                      <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
                  ) : (
                    <span className="text-secondary">In development</span>
                  )}
                </div>
                
                {/* Abstract visual for the featured product */}
                <div className="w-full md:w-1/2 aspect-video bg-surface border border-border rounded-sm flex items-center justify-center p-8 relative overflow-hidden group">
                   {/* Decorative abstract elements */}
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,_transparent_1px)] [background-size:24px_24px] group-hover:opacity-20 transition-opacity duration-700"></div>
                   <div className="relative z-10 w-24 h-24 border border-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                      <div className="w-12 h-12 border border-accent/40 rounded-full group-hover:scale-50 transition-transform duration-700 ease-out delay-75"></div>
                   </div>
                </div>
              </div>
            ) : (
              <p className="text-secondary text-lg">Products are coming soon.</p>
            )}
          </div>
        </section>

        {/* What's Next */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="border-t border-border pt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-12">What's Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['AI systems', 'Developer technology', 'Research', 'New products'].map((item) => (
                <div key={item} className="border-l border-border pl-6 py-2">
                  <h4 className="font-medium text-lg mb-2">{item}</h4>
                  <p className="text-sm text-secondary">Exploring</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
