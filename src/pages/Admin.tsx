import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { Upload, Trash2, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { useCustomLogo } from '../hooks/useCustomLogo';

export function Admin() {
  const currentLogo = useCustomLogo();
  const [status, setStatus] = useState<{ type: 'success' | 'error' | '', message: string }>({ type: '', message: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (limit to ~4MB to safely fit in localStorage)
    if (file.size > 4 * 1024 * 1024) {
      setStatus({ type: 'error', message: 'File is too large. Please upload an image under 4MB.' });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      try {
        localStorage.setItem('cyngent_custom_logo', base64String);
        window.dispatchEvent(new Event('logo-updated'));
        setStatus({ type: 'success', message: 'Logo updated successfully! Changes applied globally.' });
        setTimeout(() => setStatus({ type: '', message: '' }), 4000);
      } catch (error) {
        setStatus({ type: 'error', message: 'Error saving logo. The file might be too large for local storage.' });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('cyngent_custom_logo');
      window.dispatchEvent(new Event('logo-updated'));
      setStatus({ type: 'success', message: 'Logo reset to default.' });
      setTimeout(() => setStatus({ type: '', message: '' }), 4000);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (e) {
      // ignore
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Admin Panel - CYNGENT</title>
      </Helmet>
      <div className="pt-32 pb-32 max-w-4xl mx-auto px-6">
        <div className="pt-16 mb-12 flex items-center gap-4">
          <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight text-primary">Temporary Admin Panel</h1>
            <p className="text-secondary font-medium">Manage global application assets</p>
          </div>
        </div>

        {status.message && (
          <div className={`mb-8 p-4 rounded-2xl font-medium flex items-center gap-3 transition-all ${status.type === 'success' ? 'bg-green-500/10 text-green-700 border border-green-500/20' : 'bg-red-500/10 text-red-700 border border-red-500/20'}`}>
            {status.message}
          </div>
        )}

        <div className="bg-surface rounded-[2.5rem] p-8 md:p-12 border border-border/50 shadow-sm">
          <h2 className="text-2xl font-bold mb-8">Application Logo</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            
            {/* Logo Preview */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 bg-background rounded-3xl border border-border/60 shadow-lg p-4 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={currentLogo} 
                  alt="Current Logo" 
                  className="w-full h-full object-contain drop-shadow-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-16 h-16 rounded-full bg-accent shadow-[0_0_30px_rgba(232,93,4,0.4)]"></div>';
                  }}
                />
              </div>
              <span className="text-sm font-bold text-secondary uppercase tracking-widest">Live Preview</span>
            </div>

            {/* Upload Controls */}
            <div className="flex-1 space-y-6">
              <p className="text-secondary font-medium text-lg leading-relaxed">
                Upload a new image to globally replace the CYNGENT logo across the website (Navigation, Hero, Products).
              </p>
              
              <div className="flex flex-wrap gap-4">
                <input 
                  type="file" 
                  accept="image/png, image/jpeg, image/webp, image/svg+xml" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
                
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <Upload size={18} /> Upload New Logo
                </button>

                <button 
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border text-primary font-bold rounded-full hover:border-red-500/50 hover:text-red-500 transition-all duration-300"
                >
                  <Trash2 size={18} /> Reset to Default
                </button>
              </div>

              <div className="flex items-start gap-3 p-4 bg-accent/5 border border-accent/20 rounded-2xl">
                <ImageIcon size={20} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-secondary font-medium">
                  <strong>Note:</strong> Since this is a temporary admin panel, the logo is saved locally in your browser session. For permanent cloud storage, a backend integration will be required in the future.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
