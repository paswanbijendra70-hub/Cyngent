import { PageTransition } from '../components/PageTransition';

export function About() {
  return (
    <PageTransition>
      <div className="pt-40 pb-32 max-w-5xl mx-auto px-6">
        <h1 className="text-7xl md:text-9xl font-display font-bold mb-16 tracking-tighter uppercase">About<br/><span className="text-accent">CYNGENT</span></h1>
        
        <div className="prose prose-lg md:prose-2xl max-w-none">
          <p className="text-3xl md:text-5xl text-primary font-bold leading-tight mb-16 tracking-tight">
            CYNGENT is an independent technology company focused on building intelligent software, AI systems, and experimental digital products.
          </p>
          
          <div className="border-l-8 border-accent pl-8 md:pl-12 py-4">
            <p className="text-2xl md:text-4xl text-primary font-black uppercase tracking-widest leading-snug">
              We build,<br />experiment,<br />learn,<br />and iterate.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
