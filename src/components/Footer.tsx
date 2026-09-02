import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="font-display font-semibold text-lg tracking-wide mb-2">CYNGENT</h3>
          <p className="text-secondary text-sm">Building intelligent technology.</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-secondary">
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-12 flex items-center justify-between text-xs text-secondary/60">
        <p>&copy; {new Date().getFullYear()} CYNGENT. All rights reserved.</p>
      </div>
    </footer>
  );
}
