import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { useEffect } from 'react';
import { useCustomLogo } from '../hooks/useCustomLogo';

export function CyngentMark({ className = '' }: { className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const logoSrc = useCustomLogo();

  const springConfig = { damping: 40, stiffness: 100, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-1, 1], [15, -15]);
  const rotateY = useTransform(springX, [-1, 1], [-15, 15]);
  const moveX = useTransform(springX, [-1, 1], [-8, 8]);
  const moveY = useTransform(springY, [-1, 1], [-8, 8]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    
    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <img 
          src={logoSrc} 
          alt="CYNGENT Logo" 
          className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(232,93,4,0.3)]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.innerHTML = `
              <div class="w-full h-full rounded-full bg-gradient-to-tr from-[#E85D04] to-[#F97316] shadow-[0_0_80px_rgba(232,93,4,0.5)]"></div>
            `;
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div 
        className="w-full h-full relative" 
        style={{ rotateX, rotateY, x: moveX, y: moveY, transformStyle: 'preserve-3d' }}
      >
        {/* Subtle background glow */}
        <motion.div 
          className="absolute inset-0 bg-[#E85D04]/20 blur-[60px] rounded-full z-[-1]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* The main logo image */}
        <img 
          src={logoSrc} 
          alt="CYNGENT Logo" 
          className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(232,93,4,0.35)]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.innerHTML = `
              <div class="w-full h-full rounded-full bg-gradient-to-tr from-[#E85D04] to-[#F97316] shadow-[0_0_80px_rgba(232,93,4,0.5)]"></div>
            `;
          }}
        />
      </motion.div>
    </div>
  );
}
