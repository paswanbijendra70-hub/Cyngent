import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export function Research() {
  const topics = [
    { num: '01', title: 'Intelligence' },
    { num: '02', title: 'Reasoning' },
    { num: '03', title: 'Language & Knowledge' },
    { num: '04', title: 'Computing' },
    { num: '05', title: 'Software Systems' },
    { num: '06', title: 'Emerging Technology' }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Research - CYNGENT</title>
      </Helmet>
      <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="mb-24 pt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 max-w-4xl tracking-tight text-primary leading-[1.05]">
            Exploring the foundations of intelligent technology.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-secondary max-w-2xl leading-relaxed">
            Our research focuses on advancing capabilities and understanding across core computational disciplines.
          </p>
        </div>

        {/* Topics */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.num} className="group cursor-pointer bg-surface rounded-3xl p-8 md:p-10 hover:bg-surface-hover transition-colors duration-300 border border-border/30">
                <div className="text-sm font-bold text-accent mb-6 px-3 py-1 bg-accent/10 rounded-full inline-block">{topic.num}</div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">{topic.title}</h3>
                <div className="w-12 h-[2px] bg-border group-hover:bg-accent/40 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Research */}
        <div className="pt-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 tracking-tight px-2">Featured Research</h2>
          <div className="py-24 md:py-32 rounded-3xl flex flex-col items-center justify-center text-center bg-surface border border-border/30">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
              <div className="w-6 h-6 border-2 border-accent/40 rounded-full"></div>
            </div>
            <p className="text-3xl font-bold text-primary mb-4">Our research program is evolving.</p>
            <p className="text-lg font-medium text-secondary max-w-md mx-auto">Research publications, datasets, and whitepapers will be available soon.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
