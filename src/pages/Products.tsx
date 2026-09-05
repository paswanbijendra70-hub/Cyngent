import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { ExternalLink, ArrowRight, Sparkles, Code2, LayoutTemplate } from 'lucide-react';
import { useCustomLogo } from '../hooks/useCustomLogo';

export function Products() {
  const logoSrc = useCustomLogo();

  return (
    <PageTransition>
      <Helmet>
        <title>Products - CYNGENT</title>
      </Helmet>
      <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
        <div className="mb-20 pt-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight text-primary leading-[1.05]">
            Products
          </h1>
          <p className="text-xl md:text-2xl font-medium text-secondary max-w-2xl leading-relaxed mx-auto md:mx-0">
            Intelligent applications, reasoning models, and interfaces designed for the next generation of computing.
          </p>
        </div>

        {/* Featured App: CYNGENT AI Studio */}
        <div className="relative overflow-hidden bg-surface rounded-[2.5rem] p-8 md:p-14 border border-border/50 hover:shadow-2xl transition-all duration-500 hover:border-accent/30 mb-12 flex flex-col md:flex-row gap-10 items-start md:items-center group">
          {/* Subtle background glow effect */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-background rounded-3xl flex items-center justify-center shadow-lg border border-border/60 p-4 relative z-10 overflow-hidden">
            <img src={logoSrc} alt="CYNGENT Logo" className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110" onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-16 h-16 rounded-full bg-accent shadow-[0_0_30px_rgba(232,93,4,0.4)]"></div>';
              }} />
          </div>
          
          <div className="flex-1 relative z-10">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-primary">CYNGENT AI Studio</h2>
              <span className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-accent text-white uppercase tracking-widest shadow-md">
                <Sparkles size={14} /> Official App
              </span>
            </div>
            <p className="text-xl text-secondary font-medium leading-relaxed mb-10 max-w-3xl">
              Our flagship intelligent conversational application. Interact directly with CYNGENT's core reasoning models through a fluid, highly professional interface designed for builders and researchers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://cyngent.ai.studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-bold text-lg rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Open Application <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Other Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-surface rounded-3xl p-10 border border-border/40 hover:shadow-xl hover:border-border/80 transition-all duration-500 group cursor-pointer flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 text-accent">
              <Code2 size={28} />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4 text-primary">CYNGENT API</h3>
            <p className="text-secondary font-medium leading-relaxed mb-10 text-lg flex-1">
              High-performance programmatic access to our reasoning models. Built for extreme low latency, reliability, and ease of integration into existing systems.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-bold group-hover:text-accent transition-colors duration-300">
              Access Documentation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="bg-surface rounded-3xl p-10 border border-border/40 hover:shadow-xl hover:border-border/80 transition-all duration-500 group cursor-pointer flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 text-accent">
              <LayoutTemplate size={28} />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4 text-primary">CYNGENT Intelligence</h3>
            <p className="text-secondary font-medium leading-relaxed mb-10 text-lg flex-1">
              Core autonomous agents designed for complex problem solving, coding, and logical orchestration across multi-step workflows.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-bold group-hover:text-accent transition-colors duration-300">
              Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
