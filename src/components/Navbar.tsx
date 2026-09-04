import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-semibold tracking-wide flex items-center gap-3" onClick={() => setIsOpen(false)}>
          {/* Miniature logo representation */}
          <div className="w-5 h-5 grid grid-cols-2 gap-[2px]">
            <div className="bg-accent rounded-[1px]" />
            <div className="border border-primary/20 rounded-[1px]" />
            <div className="border border-primary/20 rounded-[1px]" />
            <div className="bg-primary rounded-[1px]" />
          </div>
          CYNGENT
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 relative ${
                    isActive ? 'text-accent' : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <Link
            to="/products"
            className="px-6 py-2.5 text-sm bg-accent text-white font-bold tracking-wide rounded-sm hover:bg-primary transition-colors duration-200"
          >
            Explore
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-primary hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-6 shadow-2xl"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold ${
                location.pathname === link.path ? 'text-accent' : 'text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 text-center text-base bg-accent text-white font-bold rounded-sm"
          >
            Explore Products
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
