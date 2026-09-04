import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export function Stories() {
  return (
    <PageTransition>
      <Helmet>
        <title>Stories - CYNGENT</title>
      </Helmet>
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-primary">Stories</h1>
          <p className="text-xl md:text-2xl font-medium text-secondary max-w-2xl leading-relaxed">
            News, engineering insights, and thoughts from the team.
          </p>
        </div>

        <div className="py-32 border-t border-border flex flex-col items-start justify-center">
          <p className="text-2xl font-medium text-primary">Stories from CYNGENT are coming soon.</p>
        </div>
      </div>
    </PageTransition>
  );
}
