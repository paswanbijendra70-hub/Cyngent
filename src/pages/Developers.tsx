import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Check, Copy } from 'lucide-react';

export function Developers() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { Cyngent } from 'cyngent-node';

const client = new Cyngent({
  apiKey: process.env.CYNGENT_API_KEY
});

async function run() {
  const response = await client.generate({
    model: "cyngent-model",
    input: "Explain the architecture of intelligent systems.",
    temperature: 0.7
  });

  console.log(response.choices[0].text);
}

run();`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Developers - CYNGENT</title>
      </Helmet>
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
        
        {/* Hero */}
        <div className="mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-4xl tracking-tight text-primary leading-tight">
            Technology for people who build.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-secondary max-w-2xl leading-relaxed">
            The CYNGENT developer ecosystem provides the tools to integrate intelligent models into your applications.
          </p>
        </div>

        {/* Developer Preview Window */}
        <div className="mb-32">
          <div className="border-t border-border pt-16">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              
              <div className="flex-1 space-y-12">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Developer Preview</h3>
                  <p className="text-lg text-secondary leading-relaxed">
                    Our API architecture is being designed for maximum reliability, speed, and simplicity. We are building the infrastructure to support large-scale intelligent applications.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {['Models', 'API', 'SDKs', 'Documentation', 'Developer Console'].map((item) => (
                    <div key={item} className="border-l-2 border-border group-hover:border-accent pl-6 py-2 transition-colors">
                      <h4 className="font-semibold text-xl mb-1">{item}</h4>
                      <p className="text-sm font-medium text-secondary">In development</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Window */}
              <div className="w-full lg:w-[600px] rounded-lg overflow-hidden bg-[#0A0A0A] border border-border/20 shadow-2xl">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121212]">
                  <div className="flex items-center gap-6 text-sm font-medium text-white/60">
                    <button className="text-white border-b border-accent pb-4 -mb-4">Request</button>
                    <button className="hover:text-white transition-colors pb-4 -mb-4">Response</button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-white/40 uppercase tracking-widest">Node.js</span>
                    <button 
                      onClick={copyCode}
                      className="text-white/40 hover:text-white transition-colors"
                      aria-label="Copy code"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-[#E5E5E5]">
                  <pre><code>
<span className="text-[#F97583]">import</span> {'{ Cyngent }'} <span className="text-[#F97583]">from</span> <span className="text-[#9ECBFF]">'cyngent-node'</span>;
<br/><br/>
<span className="text-[#F97583]">const</span> client = <span className="text-[#F97583]">new</span> Cyngent({'{'}
  apiKey: process.env.<span className="text-[#79B8FF]">CYNGENT_API_KEY</span>
{'}'});
<br/><br/>
<span className="text-[#F97583]">async function</span> <span className="text-[#B392F0]">run</span>() {'{'}
  <span className="text-[#F97583]">const</span> response = <span className="text-[#F97583]">await</span> client.<span className="text-[#B392F0]">generate</span>({'{'}
    model: <span className="text-[#9ECBFF]">"cyngent-model"</span>,
    input: <span className="text-[#9ECBFF]">"Explain the architecture of intelligent systems."</span>,
    temperature: <span className="text-[#79B8FF]">0.7</span>
  {'}'});
<br/><br/>
  console.<span className="text-[#B392F0]">log</span>(response.choices[<span className="text-[#79B8FF]">0</span>].text);
{'}'}
<br/><br/>
<span className="text-[#B392F0]">run</span>();
                  </code></pre>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
