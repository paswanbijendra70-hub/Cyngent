import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { useCustomLogo } from '../hooks/useCustomLogo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const logoSrc = useCustomLogo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const links = [
    { name: 'Research', path: '/research' },
    { name: 'Products', path: '/products' },
    { name: 'Developers', path: '/developers' },
    { name: 'Company', path: '/company' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-semibold tracking-tight flex items-center gap-3 text-primary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
          <div className="w-7 h-7 flex items-center justify-center shrink-0">
            <img 
              src={logoSrc} 
              alt="CYNGENT Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-tr from-[#E85D04] to-[#F97316] shadow-sm"></div>';
              }}
            />
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
                  className={`text-sm font-medium transition-colors duration-200 relative px-1 py-1 ${
                    isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-[18px] left-0 right-0 h-[2px] bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <button
              onClick={toggleTheme}
              className="p-2 text-secondary hover:text-primary hover:bg-surface rounded-full transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm bg-primary text-background font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-[1px]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-secondary hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className="p-2 text-primary hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-6 shadow-2xl"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium ${
                location.pathname === link.path ? 'text-accent' : 'text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 mt-2 text-center text-base bg-primary text-background font-medium rounded-xl"
          >
            Contact CYNGENT
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
