import { PageTransition } from '../components/PageTransition';

export function About() {
  return (
    <PageTransition>
      <div className="pt-40 pb-20 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-semibold mb-12">About CYNGENT</h1>
        
        <div className="prose prose-invert prose-lg">
          <p className="text-xl text-primary leading-relaxed mb-8">
            CYNGENT is an independent technology company focused on building intelligent software, AI systems, and experimental digital products.
          </p>
          
          <p className="text-lg text-secondary leading-relaxed">
            We build, experiment, learn, and iterate.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
