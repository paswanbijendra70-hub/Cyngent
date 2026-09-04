import { Product } from '../data/products';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.status === 'Available';

  return (
    <div className="group relative flex flex-col p-10 bg-white border border-border hover:border-accent rounded-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,80,0,0.1)] overflow-hidden z-0">
      {/* Animated Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10" />
      
      {/* Subtle Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary transition-colors duration-300 group-hover:text-accent">
          {product.category}
        </span>
        <span className={`text-xs font-bold px-3 py-1.5 rounded-sm border transition-colors duration-300 ${
          isAvailable 
            ? 'bg-accent/10 border-accent/20 text-accent group-hover:bg-accent group-hover:text-white' 
            : 'bg-surface border-border text-secondary'
        }`}>
          {product.status}
        </span>
      </div>

      <h3 className="text-3xl font-display font-bold mb-4 tracking-tight transition-colors duration-300">{product.name}</h3>
      <p className="text-secondary text-base leading-relaxed flex-1 mb-10 transition-colors duration-300 group-hover:text-primary">
        {product.description}
      </p>

      {isAvailable && product.url ? (
        <a 
          href={product.url}
          className="inline-flex items-center gap-2 text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 w-fit uppercase tracking-wide"
        >
          Open App
          <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      ) : (
        <span className="inline-flex items-center text-base font-bold text-secondary/50 cursor-not-allowed w-fit uppercase tracking-wide">
          In development
        </span>
      )}
    </div>
  );
}
