import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      // In a real app, this is where we'd hit the API
    }, 1500);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact - CYNGENT</title>
      </Helmet>
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight text-primary leading-tight">
              Let's build<br />what's next.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-secondary leading-relaxed">
              For press inquiries, partnerships, or general questions, please reach out.
            </p>
          </div>

          <div>
            {status === 'success' ? (
              <div className="p-8 border border-accent bg-accent/5 rounded-sm">
                <h3 className="text-2xl font-bold mb-4">Message sent</h3>
                <p className="text-secondary font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-3 border border-border hover:border-primary transition-colors font-medium rounded-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-background border-b border-border px-0 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50" 
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-background border-b border-border px-0 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50" 
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold mb-3">Organization</label>
                  <input 
                    type="text" 
                    id="organization"
                    className="w-full bg-background border-b border-border px-0 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50" 
                    placeholder="Company or Institution"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-3">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-background border-b border-border px-0 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50" 
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full bg-background border-b border-border px-0 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50 resize-none" 
                    placeholder="Provide some details..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-primary text-background font-medium text-base hover:bg-accent hover:text-white transition-colors duration-300 rounded-sm disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
