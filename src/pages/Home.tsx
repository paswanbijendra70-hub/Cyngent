import { Link } from 'react-router-dom';
import { CyngentMark } from '../components/CyngentMark';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';

export function Home() {
  return (
    <PageTransition>
      <Helmet>
        <title>CYNGENT - Building intelligent technology</title>
      </Helmet>
      <div className="pt-24 pb-20 overflow-hidden">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col items-start relative z-10 pt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-10 max-w-[100vw] leading-[1.05] tracking-tight">
            Building intelligent technology<br className="hidden lg:block"/> for what comes next.
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-end">
            <div className="lg:col-span-6">
              <p className="text-xl md:text-2xl font-medium text-secondary max-w-xl mb-12 leading-relaxed">
                CYNGENT is a technology and research company exploring intelligent systems, software, and new approaches to computing.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to="/products"
                  className="px-8 py-4 bg-primary text-background font-medium text-base rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Explore CYNGENT
                </Link>
                <Link 
                  to="/research"
                  className="px-8 py-4 bg-surface text-primary font-medium text-base rounded-full hover:bg-border transition-all duration-300 shadow-sm"
                >
                  Research
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-end">
              <CyngentMark className="w-40 h-40 md:w-56 md:h-56 opacity-90" />
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="bg-surface rounded-3xl p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
                  Technology should expand what people can do.
                </h2>
                <p className="text-xl text-secondary font-medium leading-relaxed max-w-lg mb-10">
                  We are exploring the boundaries of computational capability, creating systems that augment human ingenuity, rather than replace it.
                </p>
                <Link to="/company" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors group bg-background px-6 py-3 rounded-full shadow-sm hover:shadow-md">
                  Learn about our mission
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="aspect-[4/3] bg-background rounded-2xl relative overflow-hidden flex items-center justify-center shadow-sm border border-border/50">
                 <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] [background-size:24px_24px]"></div>
                 <div className="w-32 h-32 border border-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 border border-accent/30 bg-surface rounded-full flex items-center justify-center shadow-inner">
                       <div className="w-4 h-4 bg-accent rounded-full shadow-md"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we explore / Research */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-12 px-2">What we explore</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface rounded-2xl p-8 hover:bg-surface-hover transition-colors duration-300">
              <h4 className="text-2xl font-bold mb-3 tracking-tight">Intelligence</h4>
              <p className="text-secondary font-medium leading-relaxed mb-8">Developing new models and paradigms for machine intelligence.</p>
              <Link to="/research" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors">
                View Research <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-surface rounded-2xl p-8 hover:bg-surface-hover transition-colors duration-300">
              <h4 className="text-2xl font-bold mb-3 tracking-tight">Software</h4>
              <p className="text-secondary font-medium leading-relaxed mb-8">Building robust, scalable applications that integrate intelligent capabilities.</p>
              <Link to="/products" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors">
                View Products <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-surface rounded-2xl p-8 hover:bg-surface-hover transition-colors duration-300">
              <h4 className="text-2xl font-bold mb-3 tracking-tight">Ecosystem</h4>
              <p className="text-secondary font-medium leading-relaxed mb-8">Providing developers with the infrastructure to build the next generation of tools.</p>
              <Link to="/developers" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors">
                View Documentation <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Research (Publication Style) */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Featured Research</h3>
            <Link to="/research" className="text-primary font-medium hover:text-accent transition-colors inline-flex items-center gap-2">View all publications <ArrowRight size={16}/></Link>
          </div>
          
          <div className="bg-surface rounded-3xl p-8 md:p-12 transition-all duration-300 hover:shadow-sm border border-border/30">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start group cursor-pointer">
              <div className="w-full md:w-48 shrink-0">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-3">Update</span>
                <p className="text-sm text-secondary font-medium">Sep 03, 2026</p>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Research publications are coming soon</h4>
                <p className="text-lg text-secondary font-medium max-w-2xl leading-relaxed">
                  Our team is currently establishing the foundational models and systems. Published research and whitepapers will be available in this section.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
