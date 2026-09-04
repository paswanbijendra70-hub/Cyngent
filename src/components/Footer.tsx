import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t-4 border-primary mt-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h3 className="font-display font-black text-4xl tracking-tighter uppercase mb-4 text-white">CYNGENT</h3>
          <p className="text-white/70 text-xl font-medium">Building intelligent technology.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-lg font-bold uppercase tracking-widest">
          <Link to="/products" className="text-white hover:text-accent transition-colors">Products</Link>
          <Link to="/about" className="text-white hover:text-accent transition-colors">About</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-12 flex items-center justify-between text-sm font-bold text-white/50 uppercase tracking-widest border-t border-white/10 pt-12">
        <p>&copy; {new Date().getFullYear()} CYNGENT.</p>
      </div>
    </footer>
  );
}
