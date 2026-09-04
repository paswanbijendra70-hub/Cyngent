import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - CYNGENT</title>
      </Helmet>
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6 min-h-[70vh] flex flex-col justify-center">
        <h1 className="text-7xl md:text-9xl font-display font-bold mb-8 tracking-tighter">404</h1>
        <p className="text-3xl font-medium text-secondary mb-12">This page doesn't exist.</p>
        <a 
          href="/" 
          className="w-fit px-8 py-4 bg-primary text-background font-medium text-base hover:bg-accent hover:text-white transition-colors duration-300 rounded-none"
        >
          Back to CYNGENT
        </a>
      </div>
    </PageTransition>
  );
}
