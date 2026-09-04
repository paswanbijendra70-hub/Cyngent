import { useEffect } from 'react';

export function PWABadge() {
  useEffect(() => {
    // If you need PWA badge for update ready logic, use virtual:pwa-register
    // But since registerType is autoUpdate, it handles itself.
  }, []);
  
  return null;
}
