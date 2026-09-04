import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export function Company() {
  return (
    <PageTransition>
      <Helmet>
        <title>Company - CYNGENT</title>
      </Helmet>
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-4xl tracking-tight text-primary leading-tight">
            We build technology for problems that matter.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-8 text-lg font-medium text-secondary">
              <a href="#who-we-are" className="block hover:text-primary transition-colors">Who we are</a>
              <a href="#what-we-believe" className="block hover:text-primary transition-colors">What we believe</a>
              <a href="#how-we-build" className="block hover:text-primary transition-colors">How we build</a>
              <a href="#where-were-going" className="block hover:text-primary transition-colors">Where we're going</a>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-7 lg:col-start-5 space-y-32">
            <section id="who-we-are" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8">Who we are</h2>
              <div className="prose prose-lg prose-p:text-primary prose-p:leading-relaxed prose-p:font-medium max-w-none">
                <p>
                  CYNGENT is an independent technology organization exploring the intersections of software architecture, artificial intelligence, and human-computer interaction.
                </p>
                <p>
                  We are a small, focused team of engineers and researchers dedicated to pushing the boundaries of what is computationally possible, prioritizing craft, capability, and clarity.
                </p>
              </div>
            </section>

            <section id="what-we-believe" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8">What we believe</h2>
              <div className="prose prose-lg prose-p:text-primary prose-p:leading-relaxed prose-p:font-medium max-w-none">
                <p>
                  Technology should expand what people can do. We believe that powerful, intelligent tools should be deeply accessible, intuitive, and designed with rigorous attention to detail.
                </p>
                <p>
                  The best software is built when engineering and design operate as a single unified discipline, rather than separate processes.
                </p>
              </div>
            </section>

            <section id="how-we-build" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8">How we build</h2>
              <div className="prose prose-lg prose-p:text-primary prose-p:leading-relaxed prose-p:font-medium max-w-none">
                <p>
                  We prioritize simplicity over complexity. Our architecture is built to be resilient, our models are designed to be reliable, and our interfaces are crafted to disappear.
                </p>
                <p>
                  We iterate relentlessly. Nothing is ever truly finished; everything is a foundation for what comes next.
                </p>
              </div>
            </section>

            <section id="where-were-going" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8">Where we're going</h2>
              <div className="prose prose-lg prose-p:text-primary prose-p:leading-relaxed prose-p:font-medium max-w-none">
                <p>
                  We are actively developing new frameworks, API architectures, and conversational models that will serve as the core infrastructure for future CYNGENT platforms.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
