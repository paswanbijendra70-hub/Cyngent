import { Link } from 'react-router-dom';
import { CyngentMark } from '../components/CyngentMark';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export function Home() {
  const featuredProduct = products.find(p => p.featured);

  return (
    <PageTransition>
      <div className="pt-32 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-40 flex flex-col items-start relative z-10">
          <div className="mb-16">
            <CyngentMark className="w-32 h-32 md:w-40 md:h-40" />
          </div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-display font-bold mb-8 max-w-[100vw] leading-[0.9] tracking-tighter uppercase">
            Building<br />
            <span className="text-accent">Intelligent</span><br />
            Technology.
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-secondary max-w-3xl mb-16 leading-snug">
            CYNGENT is an independent technology company building intelligent systems, software, and new digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link 
              to="/products"
              className="px-10 py-5 bg-accent text-white font-bold text-lg uppercase tracking-widest rounded-sm hover:bg-primary transition-colors hover:shadow-xl"
            >
              Explore Products
            </Link>
            <Link 
              to="/about"
              className="px-10 py-5 border-2 border-primary text-primary font-bold text-lg uppercase tracking-widest rounded-sm hover:bg-primary hover:text-white transition-colors"
            >
              About CYNGENT
            </Link>
          </div>
        </section>

        {/* Featured Product */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="border-t-4 border-primary pt-16">
            <h2 className="text-lg font-black uppercase tracking-widest text-accent mb-16">Featured Platform</h2>
            
            {featuredProduct ? (
              <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-start">
                <div className="flex-1">
                  <h3 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter uppercase">{featuredProduct.name}</h3>
                  <p className="text-2xl font-medium text-secondary mb-12 max-w-2xl leading-snug">
                    A conversational AI application developed as part of the CYNGENT ecosystem.
                  </p>
                  {featuredProduct.status === 'Available' && featuredProduct.url ? (
                    <a 
                      href={featuredProduct.url}
                      className="inline-flex items-center gap-4 text-3xl font-bold text-primary hover:text-accent transition-colors group uppercase tracking-tight"
                    >
                      Open App 
                      <ArrowRight size={40} className="transition-transform duration-300 group-hover:translate-x-4" />
                    </a>
                  ) : (
                    <span className="text-secondary text-2xl font-bold uppercase tracking-tight">In development</span>
                  )}
                </div>
                
                {/* Abstract visual for the featured product */}
                <div className="w-full xl:w-1/2 aspect-square md:aspect-video xl:aspect-square bg-white border-2 border-border hover:border-accent rounded-sm flex items-center justify-center p-8 relative overflow-hidden group shadow-2xl transition-colors duration-500">
                   {/* Decorative abstract elements */}
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary)_2px,_transparent_2px)] [background-size:48px_48px] group-hover:opacity-20 transition-opacity duration-700"></div>
                   
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                   <div className="relative z-10 w-48 h-48 border-4 border-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-accent transition-all duration-700 ease-out bg-white shadow-xl">
                      <div className="w-24 h-24 bg-accent rounded-full group-hover:scale-50 transition-transform duration-700 ease-out delay-75"></div>
                   </div>
                </div>
              </div>
            ) : (
              <p className="text-primary text-3xl font-bold">Products are coming soon.</p>
            )}
          </div>
        </section>

        {/* What's Next */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="border-t-4 border-primary pt-16 bg-surface p-12 md:p-24 rounded-sm">
            <h2 className="text-lg font-black uppercase tracking-widest text-accent mb-16">What's Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {['AI systems', 'Developer technology', 'Research', 'New products'].map((item) => (
                <div key={item} className="border-l-4 border-primary pl-8 py-2">
                  <h4 className="font-bold text-3xl mb-4 tracking-tight">{item}</h4>
                  <p className="text-lg font-bold text-secondary uppercase tracking-widest">Exploring</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
