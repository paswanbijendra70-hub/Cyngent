import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-3xl tracking-tight mb-4 text-primary">CYNGENT</h3>
            <p className="text-secondary text-sm font-medium leading-relaxed">
              Technology • Research • Software
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-6">Explore</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-secondary">
              <Link to="/research" className="hover:text-primary transition-colors">Research</Link>
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <Link to="/developers" className="hover:text-primary transition-colors">Developers</Link>
              <Link to="/company" className="hover:text-primary transition-colors">Company</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-6">Resources</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-secondary">
              <Link to="/stories" className="hover:text-primary transition-colors">Insights</Link>
              <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-6">Legal</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-secondary">
              <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link to="#" className="hover:text-primary transition-colors">Security</Link>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between text-xs text-secondary/60 border-t border-border pt-8 font-medium">
          <p>&copy; {new Date().getFullYear()} CYNGENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
