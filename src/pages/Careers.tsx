import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export function Careers() {
  return (
    <PageTransition>
      <Helmet>
        <title>Careers - CYNGENT</title>
      </Helmet>
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-4xl tracking-tight text-primary leading-tight">
            Come build with us.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-secondary max-w-2xl leading-relaxed">
            Join a team of engineers, researchers, and designers building intelligent systems.
          </p>
        </div>

        <div className="mb-32 border-t border-border pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Engineering', 'Research', 'Software', 'Infrastructure', 'Developer Technology', 'Design'].map((area) => (
              <div key={area} className="border border-border p-8 rounded-sm bg-surface/50">
                <h3 className="text-xl font-bold mb-4">{area}</h3>
                <p className="text-sm font-medium text-secondary">There are no open positions at the moment.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-24 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">Interest Form</h2>
          <p className="text-lg text-secondary mb-12">
            If you'd like to be notified when positions open up, please submit your information below.
          </p>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your interest. We'll be in touch."); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">First name</label>
                <input type="text" id="firstName" className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">Last name</label>
                <input type="text" id="lastName" className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors" required />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors" required />
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-semibold mb-2">Area of interest</label>
              <select id="area" className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors">
                <option>Engineering</option>
                <option>Research</option>
                <option>Design</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="portfolio" className="block text-sm font-semibold mb-2">Portfolio / GitHub / LinkedIn (optional)</label>
              <input type="url" id="portfolio" className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
            </div>
            <button type="submit" className="px-8 py-4 bg-primary text-background font-medium text-base hover:bg-accent hover:text-white transition-colors duration-300 rounded-sm">
              Submit Interest
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
