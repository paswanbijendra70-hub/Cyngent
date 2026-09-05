import { useState, useEffect } from 'react';

export function useCustomLogo() {
  const [logo, setLogo] = useState<string | null>(() => {
    try {
      return localStorage.getItem('cyngent_custom_logo');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        setLogo(localStorage.getItem('cyngent_custom_logo'));
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
    const currentLogo = logo || '/download.webp';
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = currentLogo;
  }, [logo]);

  return logo || '/download.webp';
}
