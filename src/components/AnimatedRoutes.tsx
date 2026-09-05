import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Research } from '../pages/Research';
import { Company } from '../pages/Company';
import { Stories } from '../pages/Stories';
import { Careers } from '../pages/Careers';
import { Contact } from '../pages/Contact';
import { Developers } from '../pages/Developers';
import { NotFound } from '../pages/NotFound';
import { Admin } from '../pages/Admin';

export function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - react-router v7 types missing key prop */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/products" element={<Products />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/company" element={<Company />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
