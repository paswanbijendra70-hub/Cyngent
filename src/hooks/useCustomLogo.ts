import { useState, useEffect } from 'react';

export function useCustomLogo() {
  const [logo, setLogo] = useState<string>(() => {
    try {
      const storedTimestamp = localStorage.getItem('cyngent_logo_timestamp');
      return storedTimestamp ? `/download.webp?t=${storedTimestamp}` : '/download.webp';
    } catch {
      return '/download.webp';
    }
  });

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const storedTimestamp = localStorage.getItem('cyngent_logo_timestamp');
        setLogo(storedTimestamp ? `/download.webp?t=${storedTimestamp}` : '/download.webp');
      } catch {
        // Ignore
      }
    };
    
    // Listen for our custom event from the admin panel
    window.addEventListener('logo-updated', handleStorageChange);
    // Listen for cross-tab changes
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('logo-updated', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Update the document favicon when the logo changes
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = logo;
  }, [logo]);

  return logo;
}
