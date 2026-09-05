import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/info.cyngent@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: formData.subject || "New Contact Form Submission from CYNGENT Website"
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact - CYNGENT</title>
      </Helmet>
      <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 pt-16">
          
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight text-primary leading-[1.05]">
              Let's build<br />what's next.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-secondary leading-relaxed">
              For press inquiries, partnerships, or general questions, please reach out.
            </p>
          </div>

          <div className="bg-surface rounded-[2.5rem] p-8 md:p-12 border border-border/40 shadow-sm">
            {status === 'success' ? (
              <div className="p-8 border border-accent bg-accent/5 rounded-3xl text-center md:text-left">
                <h3 className="text-3xl font-display font-bold mb-4 text-primary">Message sent</h3>
                <p className="text-lg text-secondary font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-8 py-4 bg-background border border-border hover:border-primary transition-all shadow-sm font-bold rounded-full hover:shadow-md hover:-translate-y-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 rounded-2xl text-sm font-medium">
                    Something went wrong. Please try again later or email info.cyngent@gmail.com directly.
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-secondary mb-3">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-secondary/40 font-medium" 
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-secondary mb-3">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-secondary/40 font-medium" 
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-bold text-secondary mb-3">Organization</label>
                  <input 
                    type="text" 
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-secondary/40 font-medium" 
                    placeholder="Company or Institution"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-secondary mb-3">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-secondary/40 font-medium" 
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-secondary mb-3">Message</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-secondary/40 font-medium resize-none" 
                    placeholder="Provide some details..."
                  />
                </div>

                {/* FormSubmit Honeypot (prevents spam) */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full px-8 py-5 bg-primary text-background font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 rounded-full disabled:opacity-50 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
