import { Product } from '../data/products';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.status === 'Available';

  return (
    <div className="group relative flex flex-col p-8 bg-surface border border-border hover:border-secondary/40 rounded-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden z-0">
      {/* Animated Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10" />
      
      {/* Subtle Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-medium uppercase tracking-wider text-secondary transition-colors duration-300 group-hover:text-primary">
          {product.category}
        </span>
        <span className={`text-xs px-2 py-1 rounded-sm border transition-colors duration-300 ${
          isAvailable 
            ? 'bg-accent/10 border-accent/20 text-accent group-hover:border-accent/40' 
            : 'bg-secondary/10 border-secondary/20 text-secondary group-hover:border-secondary/40'
        }`}>
          {product.status}
        </span>
      </div>

      <h3 className="text-xl font-display font-semibold mb-3 transition-colors duration-300">{product.name}</h3>
      <p className="text-secondary text-sm leading-relaxed flex-1 mb-8 transition-colors duration-300 group-hover:text-secondary/90">
        {product.description}
      </p>

      {isAvailable && product.url ? (
        <a 
          href={product.url}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300 w-fit"
        >
          Open App
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </a>
      ) : (
        <span className="inline-flex items-center text-sm font-medium text-secondary/50 cursor-not-allowed w-fit">
          In development
        </span>
      )}
    </div>
  );
}
