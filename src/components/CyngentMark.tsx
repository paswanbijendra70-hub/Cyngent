import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';

export function CyngentMark({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

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
      const x = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      const y = (e.clientY / innerHeight) * 2 - 1; // -1 to 1
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
      <div className={`w-16 h-16 grid grid-cols-2 gap-[6px] opacity-90 ${className}`}>
        <div className="bg-accent rounded-[2px]" />
        <div className="border border-secondary/30 rounded-[2px]" />
        <div className="border border-secondary/30 rounded-[2px]" />
        <div className="bg-primary rounded-[2px]" />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div className="w-full h-full relative" style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {/* Base Depth Layer */}
        <motion.div 
          className="absolute inset-0 grid grid-cols-2 gap-[6px] opacity-20"
          style={{ z: -20, x: useTransform(moveX, x => x * -1.5), y: useTransform(moveY, y => y * -1.5) }}
        >
          <div className="border border-secondary rounded-[2px]" />
          <div className="border border-secondary rounded-[2px]" />
          <div className="border border-secondary rounded-[2px]" />
          <div className="border border-secondary rounded-[2px]" />
        </motion.div>

        {/* Main Interface Layer */}
        <motion.div 
          className="absolute inset-0 grid grid-cols-2 gap-[6px] opacity-90"
          style={{ z: 0 }}
        >
          <div className="bg-accent rounded-[2px]" />
          <div className="border border-secondary/30 rounded-[2px]" />
          <div className="border border-secondary/30 rounded-[2px]" />
          <div className="bg-primary rounded-[2px]" />
        </motion.div>
        
        {/* Floating Accent Layer */}
        <motion.div 
          className="absolute inset-0 grid grid-cols-2 gap-[6px] pointer-events-none"
          style={{ z: 30, x: moveX, y: moveY }}
        >
          <div className="border border-accent/60 rounded-[2px]" />
          <div className="bg-transparent" />
          <div className="bg-transparent" />
          <div className="border border-primary/40 rounded-[2px]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
