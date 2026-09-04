import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export function Products() {
  return (
    <PageTransition>
      <Helmet>
        <title>Products - CYNGENT</title>
      </Helmet>
      <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
        <div className="mb-24 pt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight text-primary leading-[1.05]">
            Products
          </h1>
          <p className="text-xl md:text-2xl font-medium text-secondary max-w-2xl leading-relaxed">
            The software, models, and interfaces we are building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-surface rounded-3xl p-8 md:p-10 border border-border/30 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4">CYNGENT Intelligence</h3>
            <p className="text-secondary font-medium leading-relaxed mb-10">Core reasoning systems and autonomous intelligent agents.</p>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-accent/10 text-accent uppercase tracking-widest">Experimental</span>
          </div>

          <div className="bg-surface rounded-3xl p-8 md:p-10 border border-border/30 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4">CYNGENT API</h3>
            <p className="text-secondary font-medium leading-relaxed mb-10">High-performance programmatic access to our models.</p>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-background border border-border text-secondary uppercase tracking-widest">In Development</span>
          </div>

          <div className="bg-surface rounded-3xl p-8 md:p-10 border border-border/30 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4">CYNGENT Applications</h3>
            <p className="text-secondary font-medium leading-relaxed mb-10">First-party interfaces designed for human interaction.</p>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-background border border-border text-secondary uppercase tracking-widest">Coming Soon</span>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
